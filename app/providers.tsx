"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="portfolio-theme"
    >
      {children}
    </ThemeProvider>
  );
}
