export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full?: string;
  };
  alt_description: string;
}