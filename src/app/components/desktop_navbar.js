import { links } from "@/app/variables/links";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
export default function DesktopNavbar(props) {
  const pathname = usePathname();

  return (
    <div className="max-w-6xl mx-auto p-4 flex items-center justify-between text-xl">
      <Link href="/" className="green_color">
        {props.organization}
      </Link>
      <div className="flex justify-evenly items-center gap-8">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className={clsx(
              "desktop_navbar_link",
              pathname === link.href ? "pink_color opacity-100! font-bold" : ""
            )}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
