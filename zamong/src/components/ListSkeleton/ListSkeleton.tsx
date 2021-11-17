import * as S from "./styles";

const ListSkeleton = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Img />
        <S.ContentContainer>
          <S.Title />
          <S.Lucy />
          <S.Date />
        </S.ContentContainer>
        <S.TagContainer>
          <S.Tag />
          <S.Tag />
          <S.Tag />
        </S.TagContainer>
      </S.Container>
      <S.Line />
    </>
  );
};

export default ListSkeleton;
