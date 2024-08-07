import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import localfont from '@next/font/local'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

/*Import local fonts*/ 
const hightidefont = localfont({
  src: [
    {
      path: '../public/fonts/HighTide.otf',
      weight:'400'
    },
    {
      path: '../public/fonts/High Tide Bold.otf',
      weight:'800'      
    }
  ],
  variable: '--font-hightide'
})

const hortaFont = localfont({
  src: '../public/fonts/Horta demo.otf',
  variable: '--font-horta'
})

const inter = Inter({ subsets: ["latin"] });
const league = League_Spartan({subsets: ['latin'], variable:'--font-league'})

export const metadata: Metadata = {
  title: "DBS Sample Website",
  description: "A sample website based on Diskusi Belanjawan Sarawak 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${hightidefont.variable} ${league.variable} ${hortaFont.variable}`}>
      
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        
      </body>
    </html>
  );
}
