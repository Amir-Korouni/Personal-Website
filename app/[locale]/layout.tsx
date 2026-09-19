import type { Metadata } from "next";
import "../globals.css";

import { playfair } from "../Fonts/font";

import ThemeProvider from "../Theme/ThemeProvider";
import AOSProvider from "../Components/lib/AOSProvider";
import React from "react";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Amir Korouni",
  description: "Personal portfolio of Amir Korouni",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  const direction = locale === "en" ? "lfr" : "rtl";

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className={cn("antialiased", playfair.className)}
    >
      <body
        className={`${playfair.className} antialiased min-h-full flex flex-col bg-background text-foreground`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <AOSProvider />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
