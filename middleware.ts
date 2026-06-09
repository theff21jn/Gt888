import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// ใช้ edge-safe config (ไม่มี Prisma) ใน middleware
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  // ตรวจทุกเส้นทางยกเว้น static assets / api auth internals
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
