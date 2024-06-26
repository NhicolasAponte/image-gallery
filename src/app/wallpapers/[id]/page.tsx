export default function WallpaperPage({
    params: { id: photoId, url },
  }: {
    params: { id: string, url: string};
  }) {
    return <div>
      <h1>Wallpaper {photoId}</h1>
    </div>;
  }