import { getImageById } from "~/server/queries";

export default async function FullPageImageView({
  imageId,
}: {
  imageId: number;
}) {
  const image = await getImageById(imageId);
  return (
    <div className="flex h-full w-full items-center">
      <div className="flex-shrink border-r">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col bg-black">
        <h1 className="text-xl font-bold text-white">{image.name}</h1>
      </div>
    </div>
  );
}
