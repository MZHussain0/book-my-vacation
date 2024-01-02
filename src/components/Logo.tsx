"use client";

import { cn } from "@/lib/utils";
import { PlaneTakeoffIcon } from "lucide-react";
import { Grenze_Gotisch } from "next/font/google";

type Props = {};

const logoFont = Grenze_Gotisch({
  subsets: ["latin"],
  weight: "900",
});
const Logo = (props: Props) => {
  return (
    <div
      className={cn(
        "hidden md:block cursor-pointer text-2xl leading-8 text-theme-900",
        logoFont.className
      )}>
      <div className="flex items-center justify-center">
        <p>BMV</p>
        <PlaneTakeoffIcon className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Logo;
