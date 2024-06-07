import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-Poppins bg-[#f1f1f1]">
      <Navbar/>
      <Hero/>
      <Benefits/>
    </main>
  );
}
