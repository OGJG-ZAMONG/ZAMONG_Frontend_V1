import { DreamTypeType } from "../../../../../../../../constance/dreamType";
import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

type PropsType = {
  selected: DreamTypeType[];
  setSelected: React.Dispatch<React.SetStateAction<DreamTypeType[]>>;
};

const Header = ({ selected, setSelected }: PropsType): JSX.Element => {
  const tagRender = selected.map((value, index) => {
    //선택 된것만 출력
    return (
      <div>
        <Tag>{value.name}</Tag>
      </div>
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
