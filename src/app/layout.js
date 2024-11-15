import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";

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
        {/* <Script src="//pl24750017.cpmrevenuegate.com/4b/e4/b8/4be4b895f1c4fe32e1e2896dbe3e0b85.js" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}

