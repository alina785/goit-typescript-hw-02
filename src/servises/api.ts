import axios from "axios";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
}

interface ResponseData {
  results: Image[];
  total: number;
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ResponseData> => {
  const response = await axios.get<ResponseData>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: "vLWOEmheEfdCUEdkj4DSCGhIfWiNSzXrlElpOoJ4OCk",
        query,
        page,
        per_page: 16,
      },
    }
  );
  return response.data;
};