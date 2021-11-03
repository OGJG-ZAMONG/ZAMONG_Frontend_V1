import uri from "../../../constance/uri";
import { dreamDetailResponse } from "../../../models/dto/response/dreamDetailResponse";
import { getRequestWithToken } from "../default";

export const getDreamDetail = async (dreamUUID: string) => {
  //   const token = localStorage.getItem("access_token");
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzU5MTM1NDMsImV4cCI6MTYzNTkyMDc0Mywic3ViIjoiZTljNzc2YjYtZGE3Yy00ZjM0LWFiNWMtNjA2MGNkNGNiODI4IiwidHlwZSI6ImFjY2VzcyJ9.71ENgFg600qev4xyPlAEnoT-QQRhcqR81Pe216ZdWig";
  const request = getRequestWithToken(token!);
  try {
    const response = await request.get<dreamDetailResponse>(`${uri.dreamShare}/${dreamUUID}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
