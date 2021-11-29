import Code from "../../../../../../../../interface/Code";
import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

type PropsType = {
  selected: Code[];
  deleteItem: (index: number) => void;
};

const Header = ({ selected, deleteItem }: PropsType): JSX.Element => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    e.preventDefault();
    deleteItem(index);
  };

  const tagRender = selected.map((value, index) => {
    //선택 된것만 출력
    return (
      <S.TagStyle onClick={(e) => onClickHandler(e, index)}>
        <Tag>{value.name}</Tag>
      </S.TagStyle>
    );
  });
  return (
    <S.HeaderContainer>
      <G.TitleContainer>
        <G.Title>{"꿈의 유형"}</G.Title>
      </G.TitleContainer>
      <S.TypeContainer>{tagRender}</S.TypeContainer>
    </S.HeaderContainer>
  );
};

export default Header;
