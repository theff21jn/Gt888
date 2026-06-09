"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mx-auto">
            ทำไมต้องเรา
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            จุดเด่นที่ทำให้คนเลือก TopUp
          </h2>
          <p className="mt-3 text-muted-foreground">
            ออกแบบมาเพื่อให้การเติมเกมเป็นเรื่องง่าย ปลอดภัย และคุ้มค่าที่สุด
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <Card className="h-full transition-shadow hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
