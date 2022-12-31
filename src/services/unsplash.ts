import axios from "axios";
import { config } from "../constant";

const unsplashApi = axios.create({
  baseURL: config.UNSPLASH_URL,
  headers: {
    Authorization: config.UNSPLASH_TOKEN,
  },
});

unsplashApi.get("/photos").then((x) => {
  console.log({ x });
});

export {};
