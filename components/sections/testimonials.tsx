"use client";

import { Star } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mx-auto">
            รีวิวจากผู้ใช้จริง
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            กว่า 1.2 ล้านออเดอร์ที่ไว้ใจเรา
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-secondary text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
