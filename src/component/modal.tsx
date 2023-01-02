import { useEffect } from "react";

type ModalProps = {
  active: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal(props: ModalProps) {
  const { active, onClose, children } = props;

  useEffect(() => {
    if (active) {
      // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-scroll");
      // alternatively, get bounding box of the menu, and set body height to that.
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-scroll");
      document.body.style.removeProperty("height");
    }
  }, [active]);

  return active ? (
    <div
      className="absolute z-50 w-screen top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-xl text-white hover:cursor-zoom-out flex items-center justify-center"
      onClick={onClose}
    >
      {children}
    </div>
  ) : null;
}
