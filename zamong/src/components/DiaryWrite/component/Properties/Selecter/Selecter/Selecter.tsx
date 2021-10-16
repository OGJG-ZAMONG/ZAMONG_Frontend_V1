import * as G from "../../../styles";
import * as S from "./styles";

type PropsType = {
  title: string;
  content: JSX.Element;
};

const Selecter = ({ title, content }: PropsType): JSX.Element => {
  return (
    <>
      <S.Container>
        <G.TitleContainer>
          <G.Title>{title}</G.Title>
        </G.TitleContainer>
        {content}
      </S.Container>
    </>
  );
};

export default Selecter;
