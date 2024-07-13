import axios from "axios";
import { ApiResponse } from "../types";

export const getImagesApi = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos/?client_id=JsSmgy-EoRzlMwncMO-pVMbnUr4PMr_mVBmYlDxBbMY&query=${query}&page=${page}`
  );
  return data;
};
