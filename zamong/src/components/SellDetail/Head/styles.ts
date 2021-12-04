import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const HeadContainer = styled.div`
  border-bottom: 1px solid ${color.darkGray};
`;

export const Title = styled.div`
  width: 1280px;
  font: ${font.headline1};
  color: ${color.white};
  margin-top: 56px;
`;

export const TagContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  column-gap: 12px;
`;

export const DreamInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 16px;
`;

export const BottomInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.white};
  font-size: ${font.body3};
`;

export const ShareDay = styled.div`
  color: ${color.lightGray};
  font: ${font.body3};
`

export const Cost = styled.div`
  background-color: ${color.gray};
  color: ${color.white};
  border-radius: 100px;
  padding: 6px 8px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const PrifilePhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
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
`