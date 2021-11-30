import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";
import DownChevron from "../../../assets/icons/downChevron.svg";

const DreamInterpretationList = (): JSX.Element => {
  return (
    <S.ContentInner>
      <S.Subtitle>해몽 요청</S.Subtitle>
      <div>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return <DreamInterpretation />;
        })}
        <S.MoreContaier>
          <div>더보기</div>
          <img alt="down" src={DownChevron} />
        </S.MoreContaier>
      </div>
    </S.ContentInner>
  );
};

export default DreamInterpretationList;
