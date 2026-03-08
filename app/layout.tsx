import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background"; // Path check karlena
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urmish Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ ADD 'bg-[#050505]' HERE */}
      <body className={`${inter.className} bg-[#050505] text-white`}>
        
        <ResponsiveNav/>
        <Background />
        
        {children}
      </body>
    </html>
  );
}