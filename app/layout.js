import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhysioFlow - Expert Home Physiotherapy",
  description: "Expert Physiotherapy in the comfort of your home. Dr. Sarah brings 4 years of clinical expertise directly to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
