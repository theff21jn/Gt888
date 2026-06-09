import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Mail, User as UserIcon } from "lucide-react";

import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/sign-out-button";

export const metadata: Metadata = {
  title: "บัญชีของฉัน — TopUp",
};

// ขึ้นกับ session เสมอ — ไม่ต้อง prerender/collect ตอน build
export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/account");

  const { name, email, image } = session.user;

  return (
    <main className="relative min-h-screen px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-glow" />
      <div className="mx-auto max-w-lg">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          กลับหน้าแรก
        </Link>

        <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-4">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={name ?? "avatar"}
                className="size-16 rounded-full object-cover"
              />
            ) : (
              <div className="grid size-16 place-items-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                {(name ?? email ?? "?").charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold">{name ?? "ผู้ใช้ใหม่"}</h1>
              <p className="text-sm text-muted-foreground">เข้าสู่ระบบแล้ว</p>
            </div>
          </div>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
              <UserIcon className="size-4 text-muted-foreground" />
              <div>
                <dt className="text-xs text-muted-foreground">ชื่อที่ใช้แสดง</dt>
                <dd className="text-sm font-medium">{name ?? "—"}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
              <Mail className="size-4 text-muted-foreground" />
              <div>
                <dt className="text-xs text-muted-foreground">อีเมล</dt>
                <dd className="text-sm font-medium">{email}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8">
            <SignOutButton />
          </div>
        </div>
      </div>
    </main>
  );
}
