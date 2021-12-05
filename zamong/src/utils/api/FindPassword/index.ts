import uri from "../../../constance/uri";
import {request} from "../axios";

export const sendPwEmail = async (email: string) => {
  try {
    await request.get(uri.findPwEmail, {
      params: { email: email },
    });
    alert("전송되었습니다.");
  } catch (error) {
    return Promise.reject(error);
  }
};

interface PasswordProps {
  new_password: string,
  change_password_token: string,
  email: string,
}

export const postChange = async (data: PasswordProps) => {
  try {
    await request.post(uri.rePassword, data);
  } catch (error) {
    return Promise.reject(error);
  }
}
