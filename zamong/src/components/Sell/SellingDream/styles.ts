import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const Container = styled.div`
`;

export const SellingDreamContainer = styled.div<{ img: string }>`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  border-radius: 20px;
  padding: 24px;
  background-image: url(${(props) => props.img});
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DreamTitle = styled.div`
  font: ${font.body3};
  color: ${color.white};
`;

export const UserImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Price = styled.div`
  aspect-ratio: 2.3 / 1;
  background: #8e8e93;
  border-radius: 100px;
  color: ${color.white};
  font: ${font.body2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
`;

export const DiaryDate = styled.div`
  font: ${font.body2};
  padding: 5px;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 36px;
  height: 36px;
  color: ${color.white};
  margin: 12px 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 40%;
`;

export const TagsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: right;
  margin: auto 0;
  div {
    margin: 0 3%;
  }
`;

export const ProfilePicture = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 6%;
`;

export const UserName = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 100%;
`;

export const SellingDreamTitle = styled.div`
  color: ${color.white};
  font: ${font.body2};
  padding: 0 4px;
`;