import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";
import { Link } from "react-router-dom";

//chat list
export const Container = styled.div`
  height: 100vh;
  color: ${color.white};
  margin: 0 32px;
  padding-top: 120px;
  display: grid;
  grid-template-columns: 29% 5% 66%;
  grid-template-columns: minmax(350px, 29%) minmax(100px, 5%) minmax(500px, 66%);
`;

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`;

export const ChatList = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  height: 100%;
  overflow: auto;
  row-gap: 12px;
`;

export const ChatInfoText = styled.div`
  height: 30px;
  font: ${font.headline3};
  margin-bottom: 14px;
  display: flex;
`;

export const ChatCount = styled.div`
  color: #0a84ff;
  color: ${color.blue};
`;

export const SearchChatContainer = styled.div`
  height: 44px;
  display: flex;
  margin-bottom: 12px;
`;

export const SearchChatContent = styled.input<{ imgSrc: string }>`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: ${color.darkerGray};
  color: ${color.white};
  border-radius: 10px;
  padding: 0 4%;
  &::-webkit-input-placeholder {
    background-image: url(${(props) => props.imgSrc});
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 15px;
    padding: 3px 5%;
  }
`;

//Line
export const ChatLine = styled.div`
  height: 90%;
  background-color: ${color.darkGray};
  border-radius: 15px;
  width: 3px;
  display: flex;
  margin: 0 auto;
`;

//chat view
export const ChatViewerContainer = styled.div`
  height: 90%;
  border-radius: 10px;
  padding: 16px 16px 0 16px;
  background-color: ${color.darkerGray};
  position: relative;
  display: grid;
  grid-template-rows: 10% 84% 6%;
`;

export const ChatViewHeader = styled.div`
  display: grid;
  border-bottom: 1px solid ${color.gray};
  height: 80px;
  grid-template-rows: repeat(2, 1fr);
`;

export const ChatTitle = styled.div`
  font: ${font.headline3};
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${font.body2};
  color: ${color.gray};
`;

export const UserReportBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
`;

export const MannerTemperatureBox = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const MannerTemperatureIMG = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ChatInputBox = styled.div`
  height: 36px;
  background-color: ${color.darkGray};
  border-radius: 100px;
  width: calc(100%);
  padding: 8px 4px 8px 16px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  & img {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
`;

export const ChatInput = styled.input`
  border: none;
  outline: none;
  text-decoration: none;
  background-color: inherit;
  border-radius: inherit;
  width: 90%;
  color: ${color.white};
  font-size: 16px;
  &::placeholder {
    color: ${color.gray};
  }
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
  overflow: auto;
  margin-top: 10px;
  padding: 0 8px 18px 8px;
  max-height: 650px;
`;

export const OpponentTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;

export const MyTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-5%);
  font-size: 20px;
  color: ${color.white};
  margin: auto;
  height: 100%;
`;

export const Click = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
  margin-left: 10px;
  height: 24px;
  color: ${color.blue};
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 1px solid ${color.blue};
  }
`;