import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/globals.css";
import { NavBar } from "@/app/UI/layout/navBar";
import Footer from "@/app/UI/layout/footer";
import { CartProvider } from "./Lib/catalog/carContext";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Emuna Candles",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar/>
          {children}
        </CartProvider>
       <Footer/>
      </body>
    </html>
  );
}
