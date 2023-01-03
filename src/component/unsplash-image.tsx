import { useImagePreview } from "../features/image-preview";

type UnsplashImageProps = {
  imgUrl: string;
  photoId: string;
};

export function UnsplashImage(props: UnsplashImageProps) {
  const { imgUrl, photoId } = props;
  const { openPreview } = useImagePreview();

  return (
    <figure
      onClick={() => openPreview(photoId)}
      className="w-full min-h-[10rem] overflow-hidden hover:cursor-zoom-in"
    >
      <img alt="" className="w-full" src={imgUrl} />
    </figure>
  );
}
