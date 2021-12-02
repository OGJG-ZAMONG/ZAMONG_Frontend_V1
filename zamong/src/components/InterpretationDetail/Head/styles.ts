import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const HeadContainer = styled.div`
  border-bottom: 1px solid ${color.darkGray};
`;

export const Title = styled.div`
  width: 1280px;
  color: ${color.white};
  font: ${font.headline1};
`;

export const TagContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  column-gap: 12px;
`;

export const DreamInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.white};
  font-size: ${font.body3};
  margin-bottom: 16px;
`;

export const LeftInfo = styled.div`
  display: flex;
  column-gap: 16px;
`

export const Lucy = styled.div`
  font: ${font.body1};
  color: ${color.white};
`

export const ShareDay = styled.div`
  color: ${color.lightGray};
  font: ${font.body3};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ProfileLink = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

export const PrifilePhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

export const Profile = styled.div`
  color: ${color.white};
  font: ${font.body3};
`;

export const More = styled.img`
  margin: auto 0;
  cursor: pointer;
`;

export const MoreBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
