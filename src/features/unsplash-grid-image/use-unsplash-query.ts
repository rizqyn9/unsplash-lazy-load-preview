import { atom, useAtom } from "jotai";
import { useQuery } from "react-query";
import { getUnsplashImage } from "../../services/unsplash/unsplash";

type AtomUnsplash = {
  images: { id: string; url: string }[];
  page: number;
  search: string;
  totalPage: number;
};

const initialState: AtomUnsplash = {
  images: [],
  page: 1,
  search: "person",
  totalPage: 0,
};

export const atomUnsplash = atom<AtomUnsplash>(initialState);

const useUnsplashQuery = () => {
  const [state, setState] = useAtom(atomUnsplash);

  const query = useQuery(
    ["unsplash", state.search, state.page],
    async () => {
      return getUnsplashImage({
        search: state.search,
        page: state.page,
      }).then((response) => {
        setState((old) => {
          const images = response.results.reduce<AtomUnsplash["images"]>(
            (prev, curr) => [...prev, { id: curr.id, url: curr.urls.small }],
            [...old.images]
          );

          return {
            ...old,
            images,
            totalPage: response.total_pages,
          };
        });
      });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  const search = (value: string) => {
    setState(() => ({ ...initialState, search: value, images: [] }));
  };

  const shouldLoadMore = () => {
    return state.page <= state.totalPage;
  };

  const loadMore = () => {
    if (
      query.isFetching ||
      query.isRefetching ||
      query.isLoading ||
      !shouldLoadMore()
    )
      return;
    setState((old) => ({ ...old, page: (old.page += 1) }));
  };

  return {
    images: state.images,
    state,
    search,
    isLoading: query.isLoading || query.isFetching,
    totalPage: state.totalPage,
    loadMore,
    shouldLoadMore,
  };
};

export { useUnsplashQuery };
