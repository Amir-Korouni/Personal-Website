import type { Metadata } from "next";
import "./globals.css";

import { playfair } from "./Fonts/font";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import ThemeProvider from "./Theme/ThemeProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Amir Korouni",
  description: "Personal portfolio of Amir Korouni",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        playfair.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
