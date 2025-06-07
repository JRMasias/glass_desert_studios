"use client";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/app/variables/links";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
export default function MobileNavbar(props) {
  const pathname = usePathname();

  return (
    <Sheet>
      <div className="flex justify-between items-center p-4 md:pe-10 gap-10 max-w-3xl mx-auto">
        <Link href="/" className="">
          <p className="text-xl pink_color">{props.organization}</p>
        </Link>
        <SheetTrigger
          className="hover:cursor-pointer flex flex-col justify-between items-center h-7"
          onClick={() => {
            props.menu_open(true);
          }}
        >
          <div className="w-8 h-[3px] rounded-full background_pink"></div>
          <div className="w-8 h-[3px] rounded-full background_pink"></div>
          <div className="w-8 h-[3px] rounded-full background_pink"></div>
        </SheetTrigger>
      </div>
      <SheetContent
        side="top"
        className="md:flex md:flex-col md:justify-center md:items-center bg-neutral-900"
      >
        <SheetTitle />
        <SheetDescription className="flex flex-col justify-center items-center pt-14 md:pt-0">
          {/* Glass Desert Logo */}
          <Image
            src="/images/glass_desert_studios_slab_logo_dark.jpg"
            alt="Glass Desert Studios Logo"
            width={2048}
            height={2048}
            className="w-4/5 max-w-[512px]! md:p-4"
          />
          {links.map((data) => {
            return (
              <SheetClose asChild key={data.title}>
                <Link
                  href={data.href}
                  className={clsx(
                    "p-3 text-2xl md:text-3xl lg:text-4xl blue_color hover:font-bold hover:text-emerald-400! transition-colors duration-300",
                    data.href == pathname ? "pink_color font-bold" : ""
                  )}
                >
                  {data.title}
                </Link>
              </SheetClose>
            );
          })}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
