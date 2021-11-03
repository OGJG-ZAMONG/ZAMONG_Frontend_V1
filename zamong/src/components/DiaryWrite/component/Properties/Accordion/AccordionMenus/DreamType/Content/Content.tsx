import dreamType from "../../../../../../../../constance/dreamType";
import Code from "../../../../../../../../interface/Code";
import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

type PropsType = {
  selected: Code[];
  insertItem: (item: Code) => void;
};

const Content = ({ selected, insertItem }: PropsType): JSX.Element => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Code) => {
    e.preventDefault();
    insertItem(item);
  };

  const tagRender = dreamType.map((value) => {
    if (!selected.some((item) => item.code === value.code)) {
      //선택 되지 않은 것들만 출력한다
      return (
        <S.TagStyle onClick={(e) => onClickHandler(e, value)}>
          <Tag>{value.name}</Tag>
        </S.TagStyle>
      );
    }
  });
  return (
    <>
      <S.TitleContainer>
        <S.Title>유형</S.Title>
        <S.TagContainer>{tagRender}</S.TagContainer>
      </S.TitleContainer>
      {/* <S.TagContainer></S.TagContainer> */}
    </>
  );
};

export default Content;
