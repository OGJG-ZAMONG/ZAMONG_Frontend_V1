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
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  color: ${color.lightGray};
  font-size: ${font.body3};
`;

export const PostingDate = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ProfileLink = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

export const PrifilePhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`

export const Profile = styled.div`
  color: ${color.white};
  font: ${font.body3};
`;

export const ShareButton = styled.div`
  padding: 6px 16px;
  color: white;
  background-color: ${color.blue};
  border-radius: 100px;
  cursor: pointer;
`

export const More = styled.img`
  margin: auto 0;
  cursor: pointer;
`;

export const MoreBox = styled.div`
  position: relative;
`
