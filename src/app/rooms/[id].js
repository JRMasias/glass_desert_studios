import { useRouter } from "next/router";
import { studios } from "../variables/studios";
import Image from "next/image";

export default function ImageDetail() {
  const router = useRouter();
  const { id } = router.query.id;

  const image = studios.find((img) => img.id === id);

  if (!image) return <p>Loading or image not found...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">{image.title}</h1>
      <Image
        src={image.src}
        alt={image.name}
        width={image.width}
        height={image.height}
      />
    </div>
  );
}
