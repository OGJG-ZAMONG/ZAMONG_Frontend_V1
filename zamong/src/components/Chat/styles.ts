import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

//chat list
export const Container = styled.div`
  height: 100vh;
  color: white;
  margin: 0 32px;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 29% 5% 66%;
  grid-template-columns: minmax(350px ,29%) minmax(100px ,5%) minmax(500px ,66%);
`;

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
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
  background-color: #2c2c2e;
  border: none;
  color: white;
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
  background-color: #636366;
  border-radius: 15px;
  width: 3px;
  display: flex;
  margin: 0 auto;
`;

//chat view
export const ChatViewerContainer = styled.div`
  height: 90%;
  background-color: #2c2c2e;
  border-radius: 10px;
  padding: 16px;
  position: relative;
  display: grid;
  grid-template-rows: 10% 84% 6%;
`;

export const ChatViewHeader = styled.div`
  display: grid;
  border-bottom: 1px solid #636366;
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
  color: #8e8e93;
`;

export const UserReportBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ViewUserName = styled.div``;

export const Report = styled.div`
  cursor: pointer;
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

export const MannerTemperatureText = styled.div``;


export const ChatInputBox = styled.div`
  background-color: #636366;
  border-radius: 100px;
  width: calc(100%);
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

export const ChatInput = styled.input`
  border: none;
  outline: none;
  text-decoration: none;
  background-color: inherit;
  border-radius: inherit;
  width: 90%;
  color: #ffffff;
  &::placeholder {
    color: white;
  }
`;


export const ChatSubmitIMG = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 16px 8px;
  min-height: 650px;
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
