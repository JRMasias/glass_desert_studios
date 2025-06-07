"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_navbar";
import DesktopNavbar from "./desktop_navbar";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [window_width, setWindowWidth] = useState(0);

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="top-0 z-50 sticky pb-[60px] md:pb-0 background_dark_opacity">
      {window_width >= 768 ? (
        <DesktopNavbar organization={props.organization} />
      ) : (
        <div
          className={clsx(
            `absolute w-full`,
            menuOpen
              ? "bg-neutral-900/0 transition-colors duration-300 ease-in-out"
              : "background_dark transition-colors duration-500 ease-in-out"
          )}
        >
          <MobileNavbar
            organization={props.organization}
            menu_open={setMenuOpen}
          />
        </div>
      )}
    </nav>
  );
}
