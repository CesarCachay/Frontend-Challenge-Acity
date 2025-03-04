"use client";

// vendors
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/authContext";

export function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
