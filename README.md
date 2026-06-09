# TopUp — เว็บไซต์เติมเกม (Landing Page)

Landing page สำหรับเว็บไซต์เติมเกม สร้างด้วย stack ที่ทันสมัย โทนสว่าง สะอาด มินิมอล

## Stack

**Frontend**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix + CVA)
- Framer Motion
- lucide-react (icons)

**Backend (โครงสำหรับต่อยอด — ดูหัวข้อ Roadmap)**
- Next.js API Routes
- Prisma
- PostgreSQL

## เริ่มใช้งาน

```bash
cd game-topup
npm install
npm run dev
```

เปิด http://localhost:3000

```bash
npm run build   # build สำหรับ production
npm run start   # รัน production build
npm run lint    # ตรวจ lint
```

## โครงสร้างโปรเจกต์

```
game-topup/
├─ app/
│  ├─ layout.tsx        # root layout + ฟอนต์ไทย + metadata/SEO
│  ├─ page.tsx          # ประกอบ section ทั้งหมดของ landing
│  └─ globals.css       # tailwind + ตัวแปรธีม (light minimal)
├─ components/
│  ├─ ui/               # shadcn/ui primitives (button, card, badge, accordion)
│  ├─ motion/           # Reveal / Stagger (Framer Motion)
│  └─ sections/         # navbar, hero, games, how-it-works, features,
│                       # testimonials, faq, cta, footer
├─ lib/
│  ├─ utils.ts          # cn() helper
│  └─ data.ts           # ข้อมูลตัวอย่าง (เกม, ขั้นตอน, จุดเด่น, รีวิว, FAQ)
├─ tailwind.config.ts
├─ components.json      # config ของ shadcn/ui (เพิ่ม component ด้วย CLI ได้)
└─ tsconfig.json
```

## เพิ่ม shadcn/ui component

โปรเจกต์ตั้งค่า `components.json` ไว้แล้ว เพิ่ม component ใหม่ได้ด้วย:

```bash
npx shadcn@latest add dialog
```

## Roadmap: ต่อ Backend (Prisma + PostgreSQL)

ขั้นถัดไปสำหรับทำเป็น full-stack:

1. ติดตั้ง Prisma
   ```bash
   npm install prisma @prisma/client
   npx prisma init --datasource-provider postgresql
   ```
2. ตั้งค่า `DATABASE_URL` ใน `.env`
3. ออกแบบ schema (ตัวอย่างเอนทิตี): `Game`, `Package`, `Order`, `User`, `Payment`
4. สร้าง API routes ใต้ `app/api/` เช่น
   - `GET /api/games` — ดึงรายการเกม
   - `POST /api/orders` — สร้างคำสั่งเติมเกม
   - `POST /api/payments/webhook` — รับ callback จาก payment gateway
5. แทนที่ข้อมูลใน `lib/data.ts` ด้วยข้อมูลจริงจากฐานข้อมูล

> หมายเหตุ: ตอนนี้เป็นเฟส UI/landing เท่านั้น ข้อมูลทั้งหมดเป็นตัวอย่างใน `lib/data.ts`
> ลิงก์ปุ่ม/เมนูยังเป็น placeholder (`#`) รอเชื่อมกับ flow จริงในเฟส backend
