"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#games", label: "เกมยอดนิยม" },
  { href: "#how", label: "วิธีเติม" },
  { href: "#features", label: "จุดเด่น" },
  { href: "#faq", label: "คำถามที่พบบ่อย" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Gamepad2 className="size-5" />
          </span>
          <span className="text-lg tracking-tight">
            Top<span className="text-primary">Up</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#">เข้าสู่ระบบ</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#games">เติมเลย</a>
          </Button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-xl border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="เมนู"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="#">เข้าสู่ระบบ</a>
                </Button>
                <Button className="flex-1" asChild>
                  <a href="#games" onClick={() => setOpen(false)}>
                    เติมเลย
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
