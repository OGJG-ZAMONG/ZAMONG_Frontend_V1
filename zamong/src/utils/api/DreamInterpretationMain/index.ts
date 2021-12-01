import uri from "../../../constance/uri";
import instance from "../axios";

export const getDreamInterpretationList = async (page: number, size: number) => {
  try {
    return await instance.get(uri.interpretation, {
      params: {
        page: page,
        size: size,
      },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
