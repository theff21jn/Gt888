"use client";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mx-auto">
            คำถามที่พบบ่อย
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            มีข้อสงสัย? เรามีคำตอบ
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
