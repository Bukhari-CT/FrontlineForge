import Header from "@/components/Header";
import { Dock } from "@/components/magicui/dock";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <TooltipProvider delayDuration={0}>
      <Dock children={<Header />} />
    </TooltipProvider>
  );
}
