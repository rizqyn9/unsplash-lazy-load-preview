import axios from "axios";
import { config } from "../constant";
import { UnsplashResponse } from "../features/unsplash-grid-image/unsplash.types";

const unsplashApi = axios.create({
  baseURL: config.UNSPLASH_URL,
  headers: {
    Authorization: config.UNSPLASH_TOKEN,
  },
});

type QueryUnsplash = {
  page: number;
  search: string;
};

const getUnsplashImage = async (query: QueryUnsplash) => {
  const params = {
    query: query.search || "programmer",
    page: query.page,
    per_page: 5,
  };

  const { data } = await unsplashApi.get<UnsplashResponse>("/search/photos", {
    params,
  });

  return data;
};

export { getUnsplashImage };
