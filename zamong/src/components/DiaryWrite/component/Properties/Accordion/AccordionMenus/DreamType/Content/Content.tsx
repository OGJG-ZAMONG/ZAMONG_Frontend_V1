import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

const Content = (): JSX.Element => {
  return (
    <>
      <S.Title>유형</S.Title>
      <S.TagContainer>
        <Tag>악몽</Tag>
        <Tag>루시드 드림</Tag>
        <Tag>길몽</Tag>
      </S.TagContainer>
    </>
  );
};

export default Content;
