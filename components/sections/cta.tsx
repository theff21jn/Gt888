"use client";

import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-violet-600 to-fuchsia-600 px-8 py-16 text-center text-primary-foreground shadow-2xl shadow-primary/30 sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:40px_40px] opacity-20" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              พร้อมเติมเกมโปรดของคุณแล้วหรือยัง?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/85">
              สมัครฟรีวันนี้ รับโบนัสเติมเงินครั้งแรกทันที เริ่มเล่นได้ในไม่กี่วินาที
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="#games">
                  เริ่มเติมเกมเลย
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#how">เรียนรู้เพิ่มเติม</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
