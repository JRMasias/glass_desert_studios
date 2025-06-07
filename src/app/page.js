"use client";
import Image from "next/image";
import { studios } from "./variables/studios";
import { engsProds } from "./variables/engs_prods";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-4">
      {/* Main Studio Image */}
      <Image
        className="rounded-lg w-full"
        src={studios[0].image}
        alt="Glass Desert Studios main studio"
        width={studios[0].width}
        height={studios[0].height}
      />

      {/* About Section */}
      <div className="flex flex-col items-center justify-center gap-4 background_dark_purple text-center border-10 md:border-16 border_blue rounded-md my-10 p-8">
        <h1 className="text-3xl font-bold pink_color">Glass Desert Studios</h1>
        <p className="text-lg max-w-2xl text-white background_dark_blue p-4">
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
                  <Image
                    src={engProd.image}
                    alt={engProd.name}
                    width={engProd.width}
                    height={engProd.height}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-bold">{engProd.name}</h3>
                  <p className="text-sm">{engProd.role}</p>
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
