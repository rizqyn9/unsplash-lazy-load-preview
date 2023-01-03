import { atom, useAtom } from "jotai";
import { useQuery } from "react-query";
import { getUnsplashDetails } from "../../services/unsplash/unsplash";

type AtomImagePreiew = {
  active: boolean;
  photoId: string | null;
};

const initialState = {
  active: false,
  photoId: null,
};

const atomImagePreview = atom<AtomImagePreiew>(initialState);

export function useImagePreview() {
  const [state, setState] = useAtom(atomImagePreview);

  const query = useQuery(
    ["details", state.photoId],
    () => getUnsplashDetails(state.photoId!),
    {
      enabled: !!state.photoId,
    }
  );

  const openPreview = (photoId: string) => {
    setState({ active: true, photoId });
  };

  const closePreview = () => {
    setState(initialState);
  };

  return {
    openPreview,
    closePreview,
    state,
    query,
  };
}
