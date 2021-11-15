export const dreamPostingImagePost = async (
  file: File,
  dreamUUID: string
): Promise<AxiosResponse<any>> => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await request.post(`${uri.dreamShareImage}/${dreamUUID}`, formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
