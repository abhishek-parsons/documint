import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Documint for Figma",
  description: "Generate Figma component documentation in seconds!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center bg-gradient-to-r from-slate-50 to-slate-100 w-full">
        {children}
      </body>
    </html>
  );
}
