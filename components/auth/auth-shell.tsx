import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 soft-glow" />
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <Gamepad2 className="size-5" />
            </span>
            <span className="text-xl tracking-tight">
              Top<span className="text-primary">Up</span>
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {children}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {footer}
        </p>
      </div>
    </main>
  );
}

export function OrDivider() {
  return (
    <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
      <span className="h-px flex-1 bg-border" />
      หรือ
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
