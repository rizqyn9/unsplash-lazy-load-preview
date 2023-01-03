export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: Result[];
};

type Result = {
  id: string;
  urls: Urls;
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type UnsplashDetailsResponse = {
  user: User;
  likes: number;
  urls: Urls;
};

export interface User {
  id: string;
  username: string;
  name: string;
  twitter_username: any;
  bio: string;
}
