import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";
import DownChevron from "../../../assets/icons/downChevron.svg";
import { useState } from "react";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";
import { getDreamInterpretationList } from "../../../utils/api/DreamInterpretationMain";

const DreamInterpretationList = (): JSX.Element => {
  const [interpretations, setInterpretations] = useState<InterpretationDream[]>([]);

  const settingInterpretations = async () => {
    try {
      const response = await getDreamInterpretationList(0, 5);
      setInterpretations(response.data.content.response.interpretation_dreams);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.ContentInner>
      <S.Subtitle>해몽 요청</S.Subtitle>
      <div>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return <DreamInterpretation key={index} />;
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
