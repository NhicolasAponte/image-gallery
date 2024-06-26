import { getImageById } from "~/server/queries";

export default async function FullPageImageView({
  imageId,
}: {
  imageId: number;
}) {
  const image = await getImageById(imageId);
  return <img src={image.url} alt={image.name} width={250} />;
}
