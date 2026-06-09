import { Gamepad2 } from "lucide-react";

const columns = [
  {
    title: "เกม",
    links: ["RoV", "Free Fire", "Genshin Impact", "Valorant", "ดูทั้งหมด"],
  },
  {
    title: "บริการ",
    links: ["วิธีเติมเกม", "โปรโมชัน", "เช็คสถานะออเดอร์", "ราคาเติมเกม"],
  },
  {
    title: "ช่วยเหลือ",
    links: ["คำถามที่พบบ่อย", "ติดต่อเรา", "เงื่อนไขการใช้งาน", "นโยบายความเป็นส่วนตัว"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Gamepad2 className="size-5" />
              </span>
              <span className="text-lg">
                Top<span className="text-primary">Up</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              แพลตฟอร์มเติมเกมที่ไว ปลอดภัย และราคาดีที่สุด รวมเกมยอดนิยมกว่า 100 เกมในที่เดียว
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} TopUp. สงวนลิขสิทธิ์ทุกประการ</p>
          <p>เติมเกมปลอดภัย • บริการตลอด 24 ชั่วโมง</p>
        </div>
      </div>
    </footer>
  );
}
