import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import request from "../axios";

export const dreamPostingImagePost = async (
  file: File,
  dreamUUID: string
): Promise<AxiosResponse<any>> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await request.post(`${uri.dreamImage}/${dreamUUID}`, formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
