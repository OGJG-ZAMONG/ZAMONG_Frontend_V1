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

export const Price = styled.div`
  border-radius: 100px;
  padding: 6px 8px;
  background-color: ${color.gray};
  color: ${color.white};
  font-size: ${font.body2};
`;

export const PostingDate = styled.div`
  display: flex;
  margin-bottom: 16px;
  color: ${color.lightGray};
`;

export const UserInfo = styled.div`
  color: ${color.white};
  display: flex;
  gap: 16px;
`

export const Manner = styled.div`
  font: ${font.body2};
`

export const Profile = styled.div`
  font: ${font.body3};
  margin-right: 2px;
`;

export const More = styled.img`
  margin: auto 0;
`