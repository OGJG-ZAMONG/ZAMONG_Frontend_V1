import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const ChatListContainer = styled.div`
  margin-top: 56px;
  border-top: 1px solid ${color.darkGray};
`;

export const NoneList = styled.div`
  color: ${color.white};
  font: ${font.body3};
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const SubTitle = styled.div`
  margin-top: 48px;
  color: ${color.white};
  font: ${font.headline2};
`;

export const ChatList = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ChatBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  margin-bottom: 16px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.darkGray};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
`;

export const UserName = styled.div`
  font: ${font.body2};
  color: ${color.white};
`;

export const AcceptButton = styled.div`
  background: ${color.blue};
  color: ${color.white};
  font: ${font.body2};
  border-radius: 100px;
  padding: 6px 16px;
  cursor: pointer;
`;

export const OnAcceptButton = styled.div`
  color: ${color.white};
  font: ${font.body2};
  border: 1px solid ${color.white};
  border-radius: 100px;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
  padding: 6px 16px;
  cursor: pointer;
`;

export const ChatBottom = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: center;
  column-gap: 16px;
`;

export const Cancel = styled.div`
  color: ${color.white};
  font: ${font.subtitle};
  border: solid 1px ${color.white};
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 16px;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;
