import { useEffect } from "react";
import { UnsplashImage } from "../../component/unsplash-image";
import { useInView } from "../../hook/use-in-view";
import { useUnsplashQuery } from "./use-unsplash-query";

export function UnsplashGridImage() {
  const { images, isLoading, loadMore, shouldLoadMore } = useUnsplashQuery();

  const [ref, isVisible] = useInView({});

  useEffect(() => {
    if (isVisible && shouldLoadMore()) loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <>
      <div className="flex flex-col gap-5 p-5 min-h-screen py-11">
        {isLoading && <p>Loading...</p>}
        {images &&
          images.map((photo, idx) => (
            <UnsplashImage key={idx} imgUrl={photo.url} photoId={photo.id} />
          ))}
      </div>
      <div className="py-12 text-center">
        {/* @ts-expect-errors */}
        <span ref={ref} className="text-center">
          {shouldLoadMore() || isLoading ? "Loading..." : "No more result"}
        </span>
      </div>
    </>
  );
}
