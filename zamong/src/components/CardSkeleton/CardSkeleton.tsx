import * as S from "./styles";

const CardSkeleton = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Img />
        <S.Title />
        <S.TitleSecond />
      </S.Container>
    </>
  );
};

export default CardSkeleton;
