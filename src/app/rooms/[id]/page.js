"use client";
import { useParams } from "next/navigation";
import { studios } from "../../variables/studios";
import Image from "next/image";

export default function ImageDetail() {
  const searchParams = useParams();
  const id = searchParams.id;

  const image = studios.find((img) => img.id === id);

  if (!image)
    return (
      <p className="orange_color text-center">Loading or image not found...</p>
    );

  return (
    <main className=" w-full flex flex-col items-center justify-center text-white">
      <h1 className="text-xl text-white mb-4">{image.name}</h1>
      <Image
        src={image.image}
        alt={image.name}
        width={image.width}
        height={image.height}
        className="w-full"
      />
    </main>
  );
}
