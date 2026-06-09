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

**Backend**
- Next.js API Routes
- Prisma 7 (+ Neon driver adapter)
- PostgreSQL (Neon)
- Auth.js (NextAuth v5) — ระบบ login

## เริ่มใช้งาน

```bash
cd game-topup
npm install                 # postinstall จะ prisma generate ให้อัตโนมัติ
cp .env.example .env        # แล้วกรอกค่า (ดูหัวข้อ Environment ด้านล่าง)
npm run db:push             # สร้างตารางบน Neon ตาม schema
npm run dev
```

เปิด http://localhost:3000

> ถ้ายังไม่ใส่ `.env` หน้า landing (`/`) ยังเปิดได้ปกติ แต่หน้า login/register
> ต้องมี `DATABASE_URL` + `AUTH_SECRET` ถึงจะทำงาน

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
│  ├─ auth/             # login-form, register-form, oauth-buttons, auth-shell
│  └─ providers.tsx     # SessionProvider (next-auth)
├─ app/
│  ├─ login/ register/  # หน้า login / สมัครสมาชิก (server + client form)
│  ├─ account/          # หน้าบัญชี (ป้องกันด้วย middleware)
│  └─ api/
│     ├─ auth/[...nextauth]/  # route handler ของ Auth.js
│     └─ register/      # สมัครสมาชิก (zod + bcrypt)
├─ lib/
│  ├─ utils.ts          # cn() helper
│  ├─ data.ts           # ข้อมูลตัวอย่าง (เกม, ขั้นตอน, จุดเด่น, รีวิว, FAQ)
│  ├─ prisma.ts         # PrismaClient singleton (+ Neon adapter)
│  ├─ oauth.ts          # เช็คว่า OAuth provider ตัวไหนเปิดใช้งาน
│  └─ validations/auth.ts  # zod schema (login/register)
├─ prisma/
│  └─ schema.prisma     # User/Account/Session/VerificationToken
├─ prisma.config.ts     # Prisma 7 config (datasource url สำหรับ migrate)
├─ auth.ts              # NextAuth (adapter + credentials)
├─ auth.config.ts       # edge-safe config (providers + callbacks)
├─ middleware.ts        # ป้องกัน /account
├─ tailwind.config.ts
├─ components.json      # config ของ shadcn/ui (เพิ่ม component ด้วย CLI ได้)
└─ tsconfig.json
```

## Environment

คัดลอก `.env.example` เป็น `.env` แล้วกรอก:

| ตัวแปร | จำเป็น | ที่มา |
|---|---|---|
| `DATABASE_URL` | ✅ | Neon dashboard → Connection string (ตัวที่มี `-pooler`) |
| `AUTH_SECRET` | ✅ | รันคำสั่ง `npx auth secret` |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | – | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `AUTH_DISCORD_ID` / `AUTH_DISCORD_SECRET` | – | [Discord Developer Portal](https://discord.com/developers/applications) |

> ปุ่ม OAuth จะ **ซ่อนอัตโนมัติ** ถ้ายังไม่ได้ใส่ key — ใช้ email/password ได้เลย
> OAuth callback URL: `{origin}/api/auth/callback/google` และ `.../discord`

## Auth ที่ทำไว้

- สมัครสมาชิก email/password (hash ด้วย bcrypt, validate ด้วย zod)
- เข้าสู่ระบบ email/password + OAuth (Google / Discord)
- session แบบ JWT, navbar รู้สถานะ login, หน้า `/account` ป้องกันด้วย middleware
- หน้า: [`/login`](app/login/page.tsx) · [`/register`](app/register/page.tsx) · [`/account`](app/account/page.tsx)

## Deploy บน Vercel

1. push ขึ้น GitHub แล้ว import โปรเจกต์ใน Vercel
2. ใส่ Environment Variables ทั้งหมดจากตารางด้านบน (ตั้ง `AUTH_URL` เป็นโดเมนจริงด้วย)
3. Build command เป็น `prisma generate && next build` อยู่แล้ว (ใน `package.json`)
4. รัน migration ครั้งแรก: `npm run db:push` (จากเครื่อง local ที่ตั้ง `DATABASE_URL` ชี้ไป Neon)

> Prisma 7 + Neon adapter ใช้ Neon serverless driver (HTTP/WebSocket) จึงเข้ากับ
> Vercel serverless ได้ดี ไม่ต้องตั้ง connection pooling แยกเอง

## เพิ่ม shadcn/ui component

โปรเจกต์ตั้งค่า `components.json` ไว้แล้ว เพิ่ม component ใหม่ได้ด้วย:

```bash
npx shadcn@latest add dialog
```

## Roadmap: ต่อ flow เติมเกม (ยังไม่ได้ทำ)

ส่วนที่ทำแล้ว: landing page + ระบบ login/สมัครสมาชิก
ขั้นถัดไปสำหรับทำให้เติมเกมได้จริง:

1. เพิ่ม model ใน `prisma/schema.prisma`: `Game`, `Package`, `Order`, `Payment`
2. สร้าง API routes:
   - `GET /api/games` — ดึงรายการเกม (แทนข้อมูลใน `lib/data.ts`)
   - `POST /api/orders` — สร้างคำสั่งเติมเกม (ต้อง login)
   - `POST /api/payments/webhook` — รับ callback จาก payment gateway
3. เชื่อม payment gateway (TrueMoney / PromptPay / Stripe ฯลฯ)
4. หน้าประวัติคำสั่งซื้อใน `/account`

> หมายเหตุ: ข้อมูลเกม/รีวิว/FAQ บนหน้า landing ยังเป็นตัวอย่างใน `lib/data.ts`
> ลิงก์ปุ่มเติมเกม (`#games`) ยังไม่ผูกกับ flow จริง
