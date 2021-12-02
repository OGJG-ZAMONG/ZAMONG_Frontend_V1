import uri from "../../../constance/uri";
import { postInterpretationRequest } from "../../../models/dto/request/postInterpretationRequest";
import instance from "../axios";

export const postInterpretation = async (data: postInterpretationRequest) => {
  try {
    return await instance.post(uri.interpretation, data);
  } catch (error) {
    return Promise.reject(error);
  }
};
