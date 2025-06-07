import { links } from "@/app/variables/links";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
export default function DesktopNavbar(props) {
  const pathname = usePathname();

  return (
    <div className="max-w-5xl mx-auto p-4 flex items-center justify-between text-xl">
      <p className="green_color">{props.organization}</p>
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
