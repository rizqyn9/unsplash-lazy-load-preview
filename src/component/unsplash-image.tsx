import { useImagePreview } from "../features/image-preview";

type UnsplashImageProps = {
  imgUrl: string;
};

export function UnsplashImage(props: UnsplashImageProps) {
  const { imgUrl } = props;
  const { openPreview } = useImagePreview();

  return (
    <figure
      onClick={() => openPreview(imgUrl)}
      className="w-full min-h-[10rem] overflow-hidden hover:cursor-zoom-in"
    >
      <img alt="" className="w-full" src={imgUrl} />
    </figure>
  );
}
