"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 soft-glow" />
        <div className="absolute inset-0 bg-grid-light bg-[size:42px_42px] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mx-auto" variant="default">
              <Zap className="size-3.5" />
              เติมไว เข้าเกมทันทีตลอด 24 ชม.
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          >
            เติมเกมโปรดของคุณ
            <br />
            <span className="gradient-text">ง่าย ไว ในไม่กี่วินาที</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            แพลตฟอร์มเติมเกมอันดับ 1 รวมเกมยอดนิยมกว่า 100 เกม
            ราคาดี ปลอดภัย ระบบอัตโนมัติเข้าเกมทันที
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#games">
                เริ่มเติมเกม
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#how">ดูวิธีเติม</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-5 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-500" />
              ปลอดภัย 100%
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              4.9/5 จากผู้ใช้จริง
            </span>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
