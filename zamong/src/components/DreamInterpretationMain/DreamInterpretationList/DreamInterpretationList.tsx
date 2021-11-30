import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";

const DreamInterpretationList = (): JSX.Element => {
  return (
    <S.ContentInner>
      <S.Subtitle>해몽 요청</S.Subtitle>
      <div>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return <DreamInterpretation />;
        })}
      </div>
    </S.ContentInner>
  );
};

export default DreamInterpretationList;
