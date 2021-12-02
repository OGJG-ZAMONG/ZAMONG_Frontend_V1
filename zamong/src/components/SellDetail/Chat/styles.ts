import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const ChatListContainer = styled.div`
  margin-top: 56px;
  margin-bottom: 192px;
  border-top: 1px solid ${color.darkGray};
`

export const SubTitle = styled.div`
  margin-top: 48px;
  color: ${color.white};
  font: ${font.headline2};
`

export const ChatList = styled.div`
  margin-top: 48px;
  padding-bottom: 16px;
  border-bottom: solid 1px ${color.darkGray};
`

export const ChatBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  border-top: solid 1px ${color.darkGray};
  :first-of-type {
    border-top: none;
  }

`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`

export const UserName = styled.div`
  font: ${font.body2};
  color: ${color.white};
`

export const AcceptButton = styled.div`
  background: ${color.blue};
  color: ${color.white};
  font: ${font.body2};
  border-radius: 100px;
  padding: 6px 16px;
  cursor: pointer;
`

export const OnAcceptButton = styled.div`
  color: ${color.white};
  font: ${font.body2};
  border: 1px solid ${color.white};
  border-radius: 100px;
  padding: 6px 16px;
  cursor: pointer;
`

export const ChatBottom = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: center;
  column-gap: 16px;
`

export const Cancel = styled.div`
  color: ${color.white};
  font: ${font.subtitle};
  border: solid 1px ${color.white};
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 16px;
`

export const ShowList = styled.div`
  color: ${color.white};
  font: ${font.subtitle};
  background: ${color.blue};
  cursor: pointer;
  border-radius: 10px;
  padding: 12px 16px;
`