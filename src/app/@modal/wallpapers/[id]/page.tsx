//import { Modal } from './modal';

import { getImageById } from "~/server/queries";

export default async function WallpaperModal({
  params: { id: imageID },
}: {
  params: { id: string };
}) {
  const image = await getImageById(Number(imageID));
  return (
    <div>
      <img src={image.url} alt={image.name} />
    </div>
  );
}
