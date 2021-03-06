import DefaultDreamInterpretation from "./DefaultDreamInterpretation/DefaultDreamInterpretation";
import DreamInterpretationList from "./DreamInterpretationList/DreamInterpretationList";
import * as S from "./styles";

const DreamInterpretationMain = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>해몽</S.Title>
      <S.ContentContainer>
        <DefaultDreamInterpretation />
        <DreamInterpretationList />
      </S.ContentContainer>
    </S.Container>
  );
};

export default DreamInterpretationMain;
