import * as S from "./Styles";
import * as I from "../Index";
import Dream from "../../Dream/Dream";
import DownChevron from "../../../assets/icons/downChevron.svg";

const DreamList = (): JSX.Element => {
  return (
    <div>
      <I.SectionTitle>공개된 꿈 목록</I.SectionTitle>
      <div>
        <Dream />
        <Dream />
        <Dream />
        <Dream />
        <Dream />
      </div>
      <S.MoreContaier>
        <div>더보기</div>
        <img alt="down" src={DownChevron} />
      </S.MoreContaier>
    </div>
  );
};

export default DreamList;
