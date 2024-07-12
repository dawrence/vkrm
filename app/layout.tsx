import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viking Room | JuanesCode",
  description: "Viking Room by JuanesCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
