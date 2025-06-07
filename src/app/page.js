import Image from "next/image";
import studio_img from "/public/images/studio6.jpeg";
import studio2 from "/public/images/studio1.jpeg";
import studio3 from "/public/images/studio2.jpeg";
import studio4 from "/public/images/studio3.jpeg";
import studio5 from "/public/images/studio4.jpeg";
import studio6 from "/public/images/studio5.jpeg";

const img_width = 1152;
const img_height = 768;

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-4">
      <Image
        className="rounded-lg w-full"
        src={studio_img}
        alt="Glass Desert Studios main studio"
        width={img_width}
        height={img_height}
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
        <div className="flex items-center justify-evenly flex-wrap"></div>
      </div>
    </main>
  );
}
