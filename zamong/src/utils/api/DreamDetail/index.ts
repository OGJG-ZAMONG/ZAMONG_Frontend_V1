import uri from "../../../constance/uri";
import instance from "../axios";
import { dreamDetailResponse } from "../../../models/dto/response/dreamDetailResponse";

export const getShareDream = async (uuid: string) => {
  try {
    const response = await instance.get<dreamDetailResponse>(
      uri.shareDreamInfo.replace("DREAM_UUID", uuid)
    );

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

interface DataType {
  content: string;
  p_comment: string | null;
}

export const getDreamDetail = async (dreamUUID: string) => {
  try {
    const response = await instance.get<dreamDetailResponse>(`${uri.dreamShare}/${dreamUUID}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export interface Comment {
  uuid: string;
  is_checked: boolean;
  date_time: string;
  user_uuid: string;
  user_profile: string;
  content: string;
  like_count: number;
  dislike_count: number;
  is_like: boolean;
  is_dis_like: boolean;
}

interface CommentType {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      comments: Comment[];
    };
  };
}

export const postComment = async (uuid: string, data: DataType) => {
  try {
    await instance.post(uri.writeComment.replace("DREAM_UUID", uuid), data);
    // window.location.reload();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const responseComment = async (uuid: string) => {
  try {
    const response = await instance.get<CommentType>(
      uri.getComment.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const responseReComment = async (uuid: string) => {
  try {
    const response = await instance.get<CommentType>(
      uri.getReComment.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

interface CommentCount {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      number: number;
    };
  };
}

export const getCommentCount = async (uuid: string) => {
  try {
    const response = await instance.get<CommentCount>(
      uri.getCommentCount.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

interface ThumbType {
  type: string;
}

export const recommend = async (uuid: string, isThumb: ThumbType) => {
  try {
    await instance.post(uri.recommend.replace("DREAM_UUID", uuid), isThumb);
  } catch (error) {
    return Promise.reject(error);
  }
};
