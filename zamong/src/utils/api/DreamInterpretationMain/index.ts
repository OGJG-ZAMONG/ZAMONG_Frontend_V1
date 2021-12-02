import uri from "../../../constance/uri";
import interpretationListResponse from "../../../models/dto/response/InterpretationListResponse";
import instance from "../axios";

export const getDreamInterpretationList = async (page: number, size: number) => {
  try {
    return await instance.get<interpretationListResponse>(uri.interpretation, {
      params: {
        page: page,
        size: size,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
