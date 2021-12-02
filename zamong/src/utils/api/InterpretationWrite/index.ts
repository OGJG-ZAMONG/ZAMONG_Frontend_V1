import uri from "../../../constance/uri";
import { postInterpretationRequest } from "../../../models/dto/request/postInterpretationRequest";
import { interpretationDetailResponse } from "../../../models/dto/response/interpretationDetailResponse";
import instance from "../axios";

export const postInterpretation = async (data: postInterpretationRequest, uuid: string) => {
  try {
    return await instance.post(uri.interpretation, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const putInterpretation = async (data: postInterpretationRequest, uuid: string) => {
  try {
    return await instance.put(`${uri.interpretation}/${uuid}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getInterpretationDetail = async (uuid: string) => {
  try {
    return await instance.get<interpretationDetailResponse>(uri.interpretation);
  } catch (error) {
    return Promise.reject(error);
  }
};
