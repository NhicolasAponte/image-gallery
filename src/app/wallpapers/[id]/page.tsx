export default function WallpaperPage({
    params: { id: photoId },
  }: {
    params: { id: string };
  }) {
    return <div>{photoId}</div>;
  }