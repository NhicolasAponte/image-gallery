//import { Modal } from './modal';

export default function WallpaperModal({
    params: { id: imageID },
  }: {
    params: { id: string };
  }) {
    return <div>{imageID}</div>;
  }