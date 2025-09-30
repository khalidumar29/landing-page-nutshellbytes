import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutshell Bytes - Premium Web Development & Digital Solutions",
  description:
    "Transform your business with cutting-edge web development, SaaS solutions, and digital innovation. Specializing in modern technologies and exceptional user experiences.",
  keywords:
    "web development, SaaS, digital solutions, React, Next.js, TypeScript, modern web apps",
  authors: [{ name: "Nutshell Bytes" }],
  openGraph: {
    title: "Nutshell Bytes - Premium Web Development",
    description:
      "Transform your business with cutting-edge web development and digital solutions.",
    url: "https://nutshellbytes.com",
    siteName: "Nutshell Bytes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutshell Bytes - Premium Web Development",
    description:
      "Transform your business with cutting-edge web development and digital solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  );
}
