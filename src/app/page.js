"use client";
import { Roboto_Serif } from "next/font/google";
import Image from "next/image";
import { studios } from "./variables/studios";
import { engsProds } from "./variables/engs_prods";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ScaleOnView from "@/components/ui/image-scaler";
export const roboto_s = Roboto_Serif({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-4 max-w-5xl w-full mx-auto">
      {/* Main Studio Image */}
      <Image
        className="rounded-lg w-full"
        src={studios[0].image}
        alt="Glass Desert Studios main studio"
        width={studios[0].width}
        height={studios[0].height}
      />

      {/* About Section */}
      <div className="flex flex-col items-center justify-center gap-4 text-center p-8">
        <h1 className={`text-4xl md:text-7xl font-medium pink_color`}>
          Glass Desert Studios
        </h1>
        <p
          className={`text-lg max-w-2xl text-white background_dark_blue p-4 ${roboto_s.className}`}
        >
          Glass Desert Studios is a creative space designed for artists,
          musicians, and content creators. Our studio is equipped with
          state-of-the-art facilities to help you bring your vision to life.
        </p>
        {/* Engineers/Producers */}
        <div className="flex flex-col items-center justify-center gap-4 border-t-2 border_blue pt-4 mt-4">
          <h2 className="text-2xl font-semibold text-white">
            Meet our Talented Team
          </h2>
          <div className="flex items-center justify-evenly flex-wrap gap-4">
            {engsProds.map((engProd) => (
              <Popover key={engProd.name}>
                <PopoverTrigger
                  key={engProd.name}
                  className="cursor-pointer alternate_color flex flex-col items-center justify-center"
                >
                  {/* Spin the images when they come into view */}
                  <ScaleOnView
                    src={engProd.image}
                    alt={engProd.name}
                    width={engProd.width}
                    height={engProd.height}
                  />
                  <h3 className="text-lg font-bold">{engProd.name}</h3>
                  <p className={`text-sm ${roboto_s.className}`}>
                    {engProd.role}
                  </p>
                </PopoverTrigger>
                <PopoverContent className="background_dark_green border_pink">
                  <p className="pink_color">{engProd.name}</p>
                  <p className="text-sm text-white">{engProd.role}</p>
                  <p className="text-sm purple_color">{engProd.bio}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
