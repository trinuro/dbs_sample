import Hero from "@/components/Hero";
import Image from "next/image";
import { Inter } from "next/font/google";
import Objectives from "@/components/Objectives";
import Achievements from "@/components/Achievements";
import AboutUs from "@/components/AboutUs";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Objectives></Objectives>
      <Achievements></Achievements>
      <AboutUs></AboutUs>
      <Script src='jsFunctions.js' strategy="lazyOnload"></Script>
    </main>
  );
}
