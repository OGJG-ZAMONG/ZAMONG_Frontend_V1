import uri from "../../../constance/uri";
import { InterpretationDetailResponse } from "../../../models/dto/response/InterpretationDetail";
import interpretationListResponse from "../../../models/dto/response/InterpretationListResponse";
import instance from "../axios";

export const getInterpretationDetail = async (uuid: string) => {
    try {
        const response = await instance.get<InterpretationDetailResponse>(uri.getInterpretation.replace("DREAM_UUID", uuid));
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
}