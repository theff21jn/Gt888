"use client";

import { motion } from "framer-motion";
import { Search, Flame } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { games } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Games() {
  return (
    <section id="games" className="scroll-mt-20 py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mx-auto">
            เกมยอดนิยม
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            เลือกเกมที่ต้องการเติม
          </h2>
          <p className="mt-3 text-muted-foreground">
            รวมเกมมือถือและพีซีที่คนเล่นมากที่สุด เติมได้ครบจบในที่เดียว
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((g) => (
            <StaggerItem key={g.name}>
              <motion.a
                href="#"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                {g.hot && (
                  <Badge
                    variant="default"
                    className="absolute right-3 top-3 px-2 py-0.5"
                  >
                    <Flame className="size-3" />
                    HOT
                  </Badge>
                )}
                <div
                  className={cn(
                    "grid size-16 place-items-center rounded-2xl bg-gradient-to-br text-3xl shadow-md transition-transform group-hover:scale-110",
                    g.tint
                  )}
                >
                  {g.emoji}
                </div>
                <div>
                  <div className="font-semibold">{g.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {g.category}
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <Search className="size-4" />
            ดูเกมทั้งหมด 100+ เกม
          </a>
        </Reveal>
      </div>
    </section>
  );
}
