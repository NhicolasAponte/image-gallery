import FullPageImageView from '~/components/full-image-page';
import { Modal } from './modal';

export default function WallpaperModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView imageId={Number(imageId)} />
    </Modal>
  );
}