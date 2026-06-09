"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.46 14.97.5 12 .5A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.28 9.14 4.75 12 4.75z"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="#5865F2" aria-hidden>
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.45 3a13.3 13.3 0 0 0-.62 1.27 18.3 18.3 0 0 0-5.66 0A13 13 0 0 0 8.55 3a19.7 19.7 0 0 0-4.88 1.37C.56 9 .03 13.51.29 17.96A19.9 19.9 0 0 0 6.3 21c.48-.66.91-1.36 1.28-2.1-.7-.27-1.37-.6-2-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.06 0c.16.15.33.28.5.4-.64.39-1.31.72-2.01.99.37.74.8 1.44 1.28 2.1a19.8 19.8 0 0 0 6.02-3.04c.3-5.15-.53-9.62-3.6-13.59zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42zm7.96 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42z" />
    </svg>
  );
}

export function OAuthButtons({
  google,
  discord,
  callbackUrl = "/account",
}: {
  google: boolean;
  discord: boolean;
  callbackUrl?: string;
}) {
  if (!google && !discord) return null;

  return (
    <div className="space-y-2.5">
      {google && (
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => signIn("google", { callbackUrl })}
        >
          <GoogleIcon />
          ดำเนินการต่อด้วย Google
        </Button>
      )}
      {discord && (
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => signIn("discord", { callbackUrl })}
        >
          <DiscordIcon />
          ดำเนินการต่อด้วย Discord
        </Button>
      )}
    </div>
  );
}
