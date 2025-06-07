import Image from "next/image";
import { studios } from "../variables/studios";

export default function Rooms() {
  return (
    <main className="flex flex-col justify-center items-center py-4">
      <h1 className="text-3xl lg:text-5xl orange_color">Bookable Studios</h1>

      {/* Card */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8 max-w-3xl">
        {studios.map((studio) => (
          <div
            key={studio.name}
            className="background_dark_green p-8 rounded-lg shadow-md w-full"
          >
            <a href={studio.link}>
              <Image
                src={studio.image}
                alt={studio.name}
                width={studio.width}
                height={studio.height}
                className="rounded-lg mb-4"
              />
            </a>
            <div className="flex flex-col justify-center items-start gap-4 max-w-xl mx-auto">
              <h2 className="text-xl text-white font-bold self-center">
                {studio.name}
              </h2>
              <p className="orange_color">{studio.description}</p>
              <p className="pink_color self-end">Price: ${studio.price}/hour</p>
              <ul className="list-disc pl-5 mt-2">
                {studio.features.map((feature, index) => (
                  <li key={index} className="purple_color">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
