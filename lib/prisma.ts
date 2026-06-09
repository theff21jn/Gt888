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

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
