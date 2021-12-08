import uri from "../../../constance/uri";
import { searchDreamRequest } from "../../../models/dto/request/searchDreamRequest";
import { dreamListResponse } from "../../../models/dto/response/dreamListResponse";
import interpretationListResponse from "../../../models/dto/response/InterpretationListResponse";
import { UserSearchResponse } from "../../../models/dto/response/SearchResponse";
import { sellSearchResponse } from "../../../models/dto/response/SellListResponse";
import instance from "../axios";

export const getSearchId = async (id: string) => {
  try {
    const response = await instance.get<UserSearchResponse>(
      uri.userSearch + `query=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchDream = async (par: searchDreamRequest) => {
  try {
    const response = await instance.get<dreamListResponse>(uri.shareSearch, {
      params: par,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchInterpretation = async (par: searchDreamRequest) => {
  try {
    const response = await instance.get<interpretationListResponse>(
      uri.interpretationSearch,
      { params: par }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchSell = async (par: searchDreamRequest) => {
  try {
    const response = await instance.get<sellSearchResponse>(uri.sellSearch, {
      params: par,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
