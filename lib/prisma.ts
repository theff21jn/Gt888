import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

// Prisma 7: ต้องส่ง driver adapter ให้ PrismaClient (URL ไม่อยู่ใน schema แล้ว)
// ใช้ Neon serverless driver — เหมาะกับ Vercel serverless (HTTP/WebSocket,
// ไม่ต้องกังวลเรื่อง TCP connection pooling)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. คัดลอก .env.example เป็น .env แล้วใส่ connection string ของ Neon"
    );
  }
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });
}

// สร้าง client แบบ lazy ผ่าน Proxy — ค่อยเชื่อมต่อจริง (และเช็ค DATABASE_URL)
// ตอนถูกเรียกใช้ครั้งแรกเท่านั้น ไม่ใช่ตอน import module
// สำคัญสำหรับ Vercel: ขั้น build จะ collect page data โดยไม่มี env ทำให้
// ถ้า init ทันทีตอน import จะ throw แล้ว build ล้ม
function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrisma();
    const value = Reflect.get(client, prop);
    return typeof value === "function" ? value.bind(client) : value;
  },
});
