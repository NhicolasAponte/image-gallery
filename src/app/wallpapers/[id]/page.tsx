import FullPageImageView from "~/components/full-image-page";

export default function WallpaperPage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView imageId={Number(imageId)} />;
}
