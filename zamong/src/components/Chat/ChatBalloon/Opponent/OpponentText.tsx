import { FC } from "react";
import styled from "@emotion/styled";
import { color } from "../../../../style";

const OpponentText = styled.div`
  background-color: ${color.darkGray};
  border-radius: 18px;
  padding: 8px 16px;
  max-width: 500px;
  display: inline-block;
  margin: 4px 0;
`;

const OpponentTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;

interface Props {
  message: string;
}

const MyText: FC<Props> = ({ message }): JSX.Element => {
  return (
    <OpponentTextContainer>
      <OpponentText>{message}</OpponentText>
    </OpponentTextContainer>
  );
};

export default MyText;
