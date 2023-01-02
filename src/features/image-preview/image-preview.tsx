import { useCallback } from "react";
import { Modal } from "../../component/modal";
import { useImagePreview } from "./use-image-preview";

export function ImagePreview() {
  const { state, closePreview } = useImagePreview();

  const handleOnClose = useCallback(closePreview, [closePreview]);

  return (
    <Modal active={state.active} onClose={handleOnClose}>
      <div className="md:w-1/2 md:max-w-md bg-white flex items-center justify-center p-5 hover:cursor-default rounded-xl">
        {state.imgUrl && <img src={state.imgUrl} alt={state.imgUrl} />}
      </div>
    </Modal>
  );
}
