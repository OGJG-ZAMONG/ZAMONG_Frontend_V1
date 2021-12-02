import { color } from "../../style/color";
import { font } from "../../style/font";
import styled from "@emotion/styled";

export const SearchContent = styled.div`
  width: 1280px;
  padding-top: 90px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const ContentBox = styled.div``;

export const ResultText = styled.p`
  color: ${color.white};
  margin-top: 28px;
  font: ${font.headline2};
`;

export const HeadText = styled.p`
  color: ${color.white};
  font: ${font.headline3};
  margin-bottom: 24px;
`;

export const DreamBox = styled.div`
  margin-top: 56px;
`;

export const UserBox = styled.div`
  margin-top: 56px;
`;

export const More = styled.div`
  color: ${color.white};
  font: ${font.body3};
  width: 100%;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${color.hoverBlack};
  }
  img {
    margin-left: 8px;
  }
`;

export const User = styled.div`
  width: 1280px;
  height: 60px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
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
  width: fit-content;
  height: 60px;
  display: flex;
`;

export const FollowDate = styled.span`
  color: ${color.white};
  box-sizing: border-box;
  margin-top: 18px;
  font: ${font.body3};
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

export const FollowBtn = styled.div`
  width: 91px;
  height: 32px;
  border-radius: 120px;
  background-color: ${color.blue};
  color: ${color.white};
  margin: 14px 0px 0px 15px;
  text-align: center;
  font: ${font.body2};
  padding-top: 3px;
  cursor: pointer;
`;
