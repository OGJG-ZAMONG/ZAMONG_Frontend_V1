import styled from "@emotion/styled";
import { color } from "../../../../style/color";
import { font } from "../../../../style/font";

export const ContentBox = styled.div`
  width: 304px;
  height: 296px;
`;

export const TopBox = styled.div<{ img: string }>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  border-radius: 20px;
  padding: 24px;
  background-image: url(${(props) => props.img});
  align-items: flex-end;
  justify-content: space-between;
`;

export const Price = styled.div`
  backdrop-filter: blur(10px);
  background: rgb(0, 0, 0, 0.4);
  border-radius: 100px;
  color: ${color.white};
  padding: 5px 8px;
  font: ${font.description};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Date = styled.div`
  height: 24px;
  font: ${font.description};
  background-color: ${color.black};
  backdrop-filter: blur(10px);
  color: ${color.white};
  background: rgb(0, 0, 0, 0.4);
  padding: 3px 5px;
  border-radius: 5px;
  z-index: 1;
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 36px;
  height: 36px;
  color: ${color.white};
  margin: 12px 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const ProfilePicture = styled.img`
  max-width: 36px;
  min-width: 36px;
  min-height: 36px;
  max-height: 36px;
  border-radius: 100%;
  margin-right: 6%;
`;

export const UserName = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
`;

export const Tag = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  align-items: center;
  div {
    margin: 0 1%;
  }
`;

export const Title = styled.div`
  margin-top: 16px;
  font: ${font.body3};
  color: ${color.white};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.5em;
  max-height: 3em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;
