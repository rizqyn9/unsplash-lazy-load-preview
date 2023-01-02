import { atom, useAtom } from "jotai";

type AtomImagePreiew = {
  active: boolean;
  imgUrl: string | null;
};

const initialState = {
  active: false,
  imgUrl: null,
};

const atomImagePreview = atom<AtomImagePreiew>(initialState);

export function useImagePreview() {
  const [state, setState] = useAtom(atomImagePreview);

  const openPreview = (imgUrl: string) => {
    setState({ active: true, imgUrl });
  };

  const closePreview = () => {
    setState(initialState);
  };

  return {
    openPreview,
    closePreview,
    state,
  };
}
