import {
  Gamepad2,
  Zap,
  ShieldCheck,
  Headphones,
  Wallet,
  BadgePercent,
  type LucideIcon,
} from "lucide-react";

export type Game = {
  name: string;
  category: string;
  emoji: string;
  tint: string; // tailwind gradient classes for the icon tile
  hot?: boolean;
};

export const games: Game[] = [
  { name: "RoV", category: "MOBA", emoji: "⚔️", tint: "from-amber-400 to-orange-500", hot: true },
  { name: "Free Fire", category: "Battle Royale", emoji: "🔥", tint: "from-rose-400 to-red-500", hot: true },
  { name: "PUBG Mobile", category: "Battle Royale", emoji: "🎯", tint: "from-yellow-400 to-amber-500" },
  { name: "Genshin Impact", category: "RPG", emoji: "🌟", tint: "from-sky-400 to-indigo-500", hot: true },
  { name: "Mobile Legends", category: "MOBA", emoji: "🛡️", tint: "from-blue-400 to-cyan-500" },
  { name: "Valorant", category: "FPS", emoji: "🎮", tint: "from-rose-400 to-pink-500" },
  { name: "Roblox", category: "Sandbox", emoji: "🧱", tint: "from-emerald-400 to-teal-500" },
  { name: "Honkai: Star Rail", category: "RPG", emoji: "🚄", tint: "from-violet-400 to-purple-500" },
];

export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "เลือกเกม",
    description: "ค้นหาเกมที่ต้องการเติมจากรายการเกมยอดนิยมกว่า 100 เกม",
  },
  {
    title: "กรอก ID & แพ็กเกจ",
    description: "ใส่ ID ผู้เล่นและเลือกจำนวนเงิน/ไอเทมที่ต้องการเติม",
  },
  {
    title: "ชำระเงิน",
    description: "จ่ายผ่าน TrueMoney, พร้อมเพย์, บัตรเครดิต หรือ QR ได้ทันที",
  },
  {
    title: "รับไอเทมทันที",
    description: "ระบบเติมอัตโนมัติเข้าเกมภายในไม่กี่วินาที ตลอด 24 ชม.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Zap,
    title: "เติมไวภายในไม่กี่วินาที",
    description: "ระบบอัตโนมัติเต็มรูปแบบ เติมเสร็จทันทีหลังชำระเงิน ไม่ต้องรอแอดมิน",
  },
  {
    icon: ShieldCheck,
    title: "ปลอดภัย 100%",
    description: "เข้ารหัสข้อมูลทุกธุรกรรม ทำงานร่วมกับผู้ให้บริการเกมอย่างเป็นทางการ",
  },
  {
    icon: BadgePercent,
    title: "ราคาดีที่สุด",
    description: "ราคาถูกกว่าเติมในเกม พร้อมโปรโมชันและโบนัสสำหรับสมาชิกทุกวัน",
  },
  {
    icon: Wallet,
    title: "จ่ายได้หลายช่องทาง",
    description: "รองรับ TrueMoney, พร้อมเพย์, QR PromptPay, บัตรเครดิต/เดบิต",
  },
  {
    icon: Headphones,
    title: "ซัพพอร์ต 24 ชั่วโมง",
    description: "ทีมงานพร้อมช่วยเหลือทุกวันตลอด 24 ชม. ผ่านแชทและไลน์",
  },
  {
    icon: Gamepad2,
    title: "เกมครบทุกค่าย",
    description: "รวมเกมมือถือและพีซียอดนิยมกว่า 100 เกมไว้ในที่เดียว",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "ภูมิ ก.",
    role: "นักเล่น RoV",
    avatar: "🦊",
    quote: "เติมไวมาก จ่ายเงินเสร็จคูปองเข้าเกมเลย ใช้มา 2 ปีไม่เคยมีปัญหา",
  },
  {
    name: "มายด์ ส.",
    role: "สาย Genshin",
    avatar: "🐱",
    quote: "ราคาถูกกว่าเติมในแอป แถมมีโบนัสด้วย คุ้มสุด ๆ แนะนำเลยค่ะ",
  },
  {
    name: "เจมส์ ว.",
    role: "ทีม Valorant",
    avatar: "🐺",
    quote: "ระบบ QR จ่ายง่าย ซัพพอร์ตตอบไว ตี 3 ยังมีคนช่วยตอบ ประทับใจ",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "เติมเกมใช้เวลานานไหม?",
    answer:
      "โดยปกติไอเทมจะเข้าเกมภายในไม่กี่วินาทีหลังชำระเงินสำเร็จ เนื่องจากเป็นระบบเติมอัตโนมัติ หากเกิน 5 นาทีสามารถแจ้งทีมงานได้ทันที",
  },
  {
    question: "รองรับช่องทางการชำระเงินอะไรบ้าง?",
    answer:
      "รองรับ TrueMoney Wallet, พร้อมเพย์ (PromptPay QR), บัตรเครดิต/เดบิต และโอนผ่านธนาคารชั้นนำทุกแห่งในประเทศไทย",
  },
  {
    question: "ปลอดภัยไหม ข้อมูลจะรั่วหรือเปล่า?",
    answer:
      "ทุกธุรกรรมเข้ารหัสด้วยมาตรฐานความปลอดภัยระดับสากล เราไม่เก็บข้อมูลบัตรของคุณ และทำงานร่วมกับผู้ให้บริการเกมอย่างเป็นทางการ",
  },
  {
    question: "ถ้าเติมแล้วไอเทมไม่เข้าเกมต้องทำอย่างไร?",
    answer:
      "ติดต่อทีมงานผ่านแชทหรือไลน์ได้ตลอด 24 ชั่วโมง พร้อมแจ้งหมายเลขคำสั่งซื้อ ทีมงานจะตรวจสอบและแก้ไขให้ทันที หากผิดพลาดจากระบบเรายินดีคืนเงินเต็มจำนวน",
  },
  {
    question: "มีโปรโมชันหรือส่วนลดไหม?",
    answer:
      "มีโปรโมชันและโบนัสเติมเงินสำหรับสมาชิกทุกวัน รวมถึงกิจกรรมพิเศษช่วงเทศกาล สามารถติดตามได้ที่หน้าโปรโมชันและช่องทางโซเชียลของเรา",
  },
];

export const stats = [
  { value: "1.2M+", label: "ออเดอร์สำเร็จ" },
  { value: "100+", label: "เกมยอดนิยม" },
  { value: "< 10 วิ", label: "เวลาเติมเฉลี่ย" },
  { value: "24/7", label: "ทีมซัพพอร์ต" },
];
