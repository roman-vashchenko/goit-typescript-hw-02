export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ApiResponse {
  results: Image[];
  total_pages: number;
}
