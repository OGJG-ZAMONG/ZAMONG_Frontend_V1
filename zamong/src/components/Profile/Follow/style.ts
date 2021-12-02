import { color } from "../../../style/color";
import { font } from "../../../style/font";
import styled from "@emotion/styled";

export const Content = styled.div`
  width: 100%;
  margin-top: 68px;
`;

export const Followe = styled.p`
  font: ${font.headline3};
  color: ${color.white};
  margin-bottom: 28px;
  span {
    color: ${color.blue};
  }
`;

export const FolloweList = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
  font: ${font.body3};
  color: ${color.white};
`;

export const UserBox = styled.div`
  width: 1280px;
  height: 60px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${color.darkGray};
`;

export const LeftBox = styled.div`
  height: 60px;
  display: flex;
`;

export const Profile = styled.div<{ img: string }>`
  width: 36px;
  height: 36px;
  border-radius: 120px;
  background-size: cover;
  margin-top: 10px;
  box-sizing: border-box;
  background-image: url(${(props) => props.img});
`;

export const UserNickName = styled.span`
  font: ${font.body2};
  color: ${color.white};
  box-sizing: border-box;
  margin: 15px 0px 0px 16px;
`;

export const RightBox = styled.div`
  width: 330px;
  height: 60px;
`;

export const FollowDate = styled.span`
  font: ${font.body2};
  color: ${color.darkGray};
  box-sizing: border-box;
  margin-top: 18px;
`;

export const FollowingBtn = styled.button`
  width: 91px;
  height: 32px;
  border: 1px solid ${color.white};
  border-radius: 120px;
  background-color: ${color.black};
  color: ${color.white};
  margin: 14px 0px 0px 15px;
  font: ${font.body2};
  cursor: pointer;
`;

export const FollowBtn = styled.button`
  width: 91px;
  height: 32px;
  border: 1px solid ${color.white};
  border-radius: 120px;
  background-color: ${color.black};
  color: ${color.white};
  margin: 14px 0px 0px 15px;
  cursor: pointer;
`;
