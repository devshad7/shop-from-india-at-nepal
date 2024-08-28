import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy From India At Nepal",
  description: "Buy from India at Nepal offers hassle-free shopping solutions for Nepal residents. We help you purchase any online product from India and deliver it to your doorstep anywhere in Nepal. Enjoy fast delivery, secure payment options, and reliable customer support. Shop the best of India from the comfort of your home in Nepal!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
