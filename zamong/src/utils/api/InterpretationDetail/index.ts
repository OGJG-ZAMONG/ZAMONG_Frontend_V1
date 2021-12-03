import uri from "../../../constance/uri";
import { InterpretationDetailResponse } from "../../../models/dto/response/InterpretationDetail";
import instance from "../axios";

export const getInterpretationDetail = async (uuid: string) => {
  try {
    const response = await instance.get<InterpretationDetailResponse>(
      uri.getInterpretation.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCheckComment = async (uuid: string) => {
  try {
    await instance.post(uri.checkComment.replace("DREAM_UUID", uuid));
  } catch (error) {
    return Promise.reject(error);
  }
};

interface UUIDTypes {
  dream_uuid: string,
  comment_uuid: string,
}

export const selectComment = async (uuid: UUIDTypes) => {
  try {
    const response = await instance.post(uri.selectComment, uuid);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}