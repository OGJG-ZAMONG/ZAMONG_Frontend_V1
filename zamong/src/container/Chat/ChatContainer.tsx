import { FC } from "react";
import Chat from "../../components/Chat/Chat";
import Header from "../../components/Header/Header";

const ChatContainer: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Chat />
    </>
  );
};

export default ChatContainer;