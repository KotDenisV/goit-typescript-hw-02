import axios from "axios";

interface Params {
  query: string;
  page?: number;
  per_page?: number;
  client_id: string;
}

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

const requestImage = async (query: string, page = 1): Promise<UnsplashResponse> => {
  const params: Params = {
    query,
    page,
    per_page: 12,
    client_id: "yp0qqG1aUtOWCHddGzSiyiPKlLSMQikoo_jpK367IU4",
  };

  const response = await axios.get<UnsplashResponse>("https://api.unsplash.com/search/photos", {
    params        
    });  
  return response.data;  
};

export default requestImage;

