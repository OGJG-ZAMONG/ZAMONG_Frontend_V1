import { FC } from "react";
import styled from "@emotion/styled";
import { color } from "../../../../style/color";

const MyTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const MyTextStyle = styled.div`
  background-color: ${color.blue};
  max-width: 60%;
  border-radius: 18px;
  padding: 8px 16px;
  display: inline-block;
  margin: 4px 0;
  word-break: break-all;
`;

interface Props {
  message: string;
}

const MyText: FC<Props> = ({ message }): JSX.Element => {
  return (
    <MyTextContainer>
      <MyTextStyle>{message}</MyTextStyle>
    </MyTextContainer>
  );
};

export default MyText;