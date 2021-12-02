import uri from "../../../constance/uri";
import { postInterpretationRequest } from "../../../models/dto/request/postInterpretationRequest";
import defaultResponse from "../../../models/dto/response/defaultResponse";
import { interpretationDetailResponse } from "../../../models/dto/response/interpretationDetailResponse";
import instance from "../axios";

export const postInterpretation = async (data: postInterpretationRequest, uuid: string) => {
  try {
    return await instance.post<defaultResponse<Response>>(uri.interpretation, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export interface Response {
  uuid: string;
  created_at: string;
  updated_at: string;
}

export const putInterpretation = async (data: postInterpretationRequest, uuid: string) => {
  try {
    return await instance.put<defaultResponse<Response>>(`${uri.interpretation}/${uuid}`, data);
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
