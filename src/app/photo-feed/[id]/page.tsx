import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          style={{ width: "100%", height: "auto" }}
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
