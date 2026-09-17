"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

type ThemeProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  );
}
