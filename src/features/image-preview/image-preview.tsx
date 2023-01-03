import { useCallback, useMemo } from "react";
import { Modal } from "../../component/modal";
import { useImagePreview } from "./use-image-preview";

export function ImagePreview() {
  const { state, closePreview, query } = useImagePreview();

  const handleOnClose = useCallback(() => {
    query.remove();
    closePreview();
  }, [closePreview, query]);

  const content = useMemo(() => {
    if (query.isSuccess) {
      const { urls, user, likes } = query.data;
      return (
        <div className="min-h-[40vh] flex flex-col gap-5 justify-between w-full">
          <img src={urls.full} alt={urls.full} />
          <div className="flex justify-between w-full">
            <p className="text-lg ">{user.name}</p>
            <p>Like: {likes || 0}</p>
          </div>
        </div>
      );
    } else return <p className="text-black">Loading ...</p>;
  }, [query]);

  return (
    <Modal active={state.active} onClose={handleOnClose}>
      <div className="md:w-1/2 md:max-w-md bg-white flex items-center justify-center p-5 hover:cursor-default rounded-xl text-black">
        {content}
      </div>
    </Modal>
  );
}
