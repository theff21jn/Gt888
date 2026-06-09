"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SignOutButton() {
  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <LogOut className="size-4" />
      ออกจากระบบ
    </Button>
  );
}
