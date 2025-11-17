import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ukyo Nagata - Portfolio",
  description: "Personal portfolio website of Ukyo Nagata - Software Engineer & Researcher",
  keywords: ["Ukyo Nagata", "Portfolio", "Software Engineer", "Research", "Projects"],
  authors: [{ name: "Ukyo Nagata" }],
  openGraph: {
    title: "Ukyo Nagata - Portfolio",
    description: "Personal portfolio website of Ukyo Nagata - Software Engineer & Researcher",
    url: "https://ukyonagata.jp",
    siteName: "Ukyo Nagata Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
