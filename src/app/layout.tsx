import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lillian Allison",
  description: "Portfolio page",
  icons: {
    icon: "/sparkle.svg",
  }
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-background text-textRegular font-font font-thin lg:text-left mx-8 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-24">
      <a id="#top"></a>
        {children}
      </body>
    </html>
  );
}
