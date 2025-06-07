import Image from "next/image";
import logo from "../../../public/images/glass_desert_studios_slab_logo_dark.jpg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-10 pink_color gap-10 text-xl mb-2">
      <Image
        src={logo}
        alt="Glass Desert Studios Logo"
        width={2048}
        height={2048}
        className="w-full max-w-xs rounded-2xl"
      />
      <div className="flex flex-col justify-center items-center">
        <p>1234 Kings Meadow Rd.</p>
        <p>Austin, Tx 78745</p>
        <a href="tel:+15125550980" className="underline link_blue">
          512-555-0980
        </a>
        <a
          href="mailto:gda@glassdesertstudios.com"
          className="decoration-double underline link_green"
        >
          gda@glassdesertstudios.com
        </a>
      </div>
      <p className="text-xs text-center">
        Designed & developed by J. R. Masias - 2025 - Glass Desert Studios
        &copy;
      </p>
    </footer>
  );
}
