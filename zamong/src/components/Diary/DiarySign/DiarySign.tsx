import * as S from "./styles";
import { rectangle, secure } from "../../../assets";

const DiarySign = (): JSX.Element => {
  return (
    <S.Container>
      <S.RectangleContainer>
        <S.SecureImage src={secure} />
        <S.RectangleText>8월 15일</S.RectangleText>
      </S.RectangleContainer>
      <S.Description>
        대법관은 대법원장의 제청으로 국회의 동의를 얻어
      </S.Description>
    </S.Container>
  );
};

export default DiarySign;
