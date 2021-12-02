import uri from "../../../constance/uri";
import {
  interpretationSearchResponse,
  sellSearchResponse,
  ShareSearchResponse,
  UserSearchResponse,
} from "../../../models/dto/response/SearchResponse";
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

export const getSearchDream = async (title: string, types: string) => {
  try {
    const response = await instance.get<ShareSearchResponse>(
      uri.shareSearch + `title=${title}&types=${types}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchInterpretation = async (title: string, types: string) => {
  try {
    const response = await instance.get<interpretationSearchResponse>(
      uri.interpretationSearch + `title=${title}&types=${types}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchSell = async (title: string, types: string) => {
  try {
    const response = await instance.get<sellSearchResponse>(
      uri.sellSearch + `title=${title}&types=${types}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
