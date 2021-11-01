import uri from "../../../constance/uri";
import { diaryWriteRequest } from "../../../models/dto/request/diaryWriteRequest";
import { getRequest } from "../default";

export const diaryWritePost = async (data: diaryWriteRequest) => {
  const request = getRequest();
  try {
    const response = await request.post(uri.dreamShare, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const diaryWritePut = async (data: diaryWriteRequest, dreamUUID: string) => {
  const request = getRequest();
  try {
    const response = await request.put(`${uri.dreamShare}/${dreamUUID}`, data);
    return response;
  } catch (error) {
    return error;
  }
};
