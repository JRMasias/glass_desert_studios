"use client";
import Link from "next/link";
import Image from "next/image";
import { studios } from "../variables/studios";
import { AudioLines } from "lucide-react";
import { useEffect, useState } from "react";
import { roboto_s } from "../variables/fonts";
import { useRouter } from "next/navigation";

export default function Rooms() {
  const router = useRouter();

  const [window_width, setWindowWidth] = useState(0);
  const [num_mics, setNumMics] = useState(0);

  const microphones = [];

  for (let i = 0; i < num_mics; i++) {
    microphones.push(
      <AudioLines
        key={i}
        className="purple_color my-10"
        size={window.innerWidth >= 1024 ? 49 : 24}
      />
    );
  }

  // Update the window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth >= 1240) {
        setNumMics(Math.floor(window.innerWidth / 50));
      } else {
        setNumMics(Math.floor(window.innerWidth / 25));
      }
    };

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [num_mics, window_width]);

  return (
    <main className="flex flex-col justify-center items-center py-4 w-full max-w-5xl mx-auto">
      <h1 className="text-3xl lg:text-5xl orange_color pb-10">
        Bookable Studios
      </h1>

      {/* Card */}
      <div className="flex flex-wrap justify-center items-center max-w-5xl">
        {studios.map((studio, index) => (
          <div key={studio.name} className=" rounded-lg shadow-md w-full">
            <div
              onClick={() => router.push(`/rooms/${studio.id}`)}
              className="cursor-pointer"
            >
              <Image
                src={studio.image}
                alt={studio.name}
                width={studio.width}
                height={studio.height}
                className="rounded-t-lg"
              />
            </div>
            <div className="w-full background_dark_purple p-4 rounded-b-lg">
              <div className="flex flex-col justify-center items-start gap-4 max-w-xl mx-auto background_darker_purple p-4 rounded-lg">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-xl text-white font-bold self-center">
                    {studio.name}
                  </h2>
                  <p className="pink_color self-end">
                    Price: ${studio.price}/hour
                  </p>
                </div>
                <p className={`orange_color ${roboto_s.className} font-thin`}>
                  {studio.description}
                </p>
                <ul
                  className={`list-disc pl-5 mt-2 ${roboto_s.className} font-thin`}
                >
                  {studio.features.map((feature, index) => (
                    <li key={index} className="purple_color">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < 5 ? (
              <div className="w-full flex flex-nowrap justify-center items-center">
                {microphones}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
