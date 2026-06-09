// ตรวจว่า OAuth provider ตัวไหนถูกตั้งค่าไว้ (อ่าน env ฝั่ง server)
// ใช้ตัดสินใจว่าจะแสดงปุ่ม login ตัวไหน
export function enabledOAuth() {
  return {
    google: Boolean(
      process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
    ),
    discord: Boolean(
      process.env.AUTH_DISCORD_ID && process.env.AUTH_DISCORD_SECRET
    ),
  };
}
