import * as G from "../../../styles";
import * as S from "./styles";

type PropsType = {
  title: string;
  content: JSX.Element;
  onHover?: {
    onEnter: () => void;
    onLeave: () => void;
  };
};

const Selecter = ({ title, content, onHover }: PropsType): JSX.Element => {
  return (
    <>
      <S.Container
        onMouseEnter={onHover ? onHover.onEnter : () => {}}
        onMouseLeave={onHover ? onHover.onLeave : () => {}}
      >
        <G.TitleContainer>
          <G.Title>{title}</G.Title>
        </G.TitleContainer>
        {content}
      </S.Container>
    </>
  );
};

export default Selecter;
