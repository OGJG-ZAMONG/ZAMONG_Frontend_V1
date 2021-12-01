import DreamInterpretation from "../../Dream/DreamInterpretation/DreamInterpretation";
import * as S from "./styles";
import DownChevron from "../../../assets/icons/downChevron.svg";
import { useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    settingInterpretations();
  }, []);

  return (
    <S.ContentInner>
      <S.TitleContainer>
        <S.Subtitle>해몽 요청</S.Subtitle>
        <S.Write to="/interpretation/write">해몽 요청 글 쓰기 </S.Write>
      </S.TitleContainer>
      <div>
        {interpretations.map((value, index) => {
          return <DreamInterpretation data={value} key={index} />;
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
