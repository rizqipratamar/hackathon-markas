'use client';

import { Auth } from "@/providers/auth";


export function Providers({ children }) {
  return (
      <Auth>{children}</Auth>
  );
}