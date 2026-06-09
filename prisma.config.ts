import "dotenv/config";
import { defineConfig } from "prisma/config";

// `prisma generate` ไม่ต้องต่อ DB จริง แต่ Prisma 7 ต้องมีค่า DATABASE_URL อยู่
// จึงใส่ placeholder ให้ตอนที่ยังไม่ได้ตั้งค่า (เช่น build บน Vercel ก่อนใส่ env,
// หรือ dev เครื่องที่ยังไม่ได้สร้าง .env) — คำสั่งที่ต้องต่อ DB จริง
// (migrate / db push / studio) จะใช้ค่าจริงจาก .env เสมอ
const url =
  process.env.DATABASE_URL ??
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url,
  },
});
