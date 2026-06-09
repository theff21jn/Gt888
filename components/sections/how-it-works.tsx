"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mx-auto">
            ง่ายแค่ 4 ขั้นตอน
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            เติมเกมยังไง?
          </h2>
          <p className="mt-3 text-muted-foreground">
            ไม่ต้องสมัครสมาชิกก็เติมได้ ใช้เวลาไม่ถึงนาที
          </p>
        </Reveal>

        <Stagger className="relative mt-14 grid gap-6 md:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="relative flex flex-col items-center text-center">
                <div className="z-10 grid size-14 place-items-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
