import { DreamTypeType } from "../../../../../../../../constance/dreamType";
import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

type PropsType = {
  selected: DreamTypeType[];
  setSelected: React.Dispatch<React.SetStateAction<DreamTypeType[]>>;
};

const Content = ({ selected, setSelected }: PropsType): JSX.Element => {
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
