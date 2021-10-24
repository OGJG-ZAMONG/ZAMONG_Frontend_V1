import dreamType, {
  DreamTypeType,
} from "../../../../../../../../constance/dreamType";
import Tag from "../../../../../../../Tag/Tag";
import * as G from "../../../../../styles";
import * as S from "../styles";

type PropsType = {
  selected: DreamTypeType[];
  insertItem: (item: DreamTypeType) => void;
};

const Content = ({ selected, insertItem }: PropsType): JSX.Element => {
  const onClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: DreamTypeType
  ) => {
    e.preventDefault();
    insertItem(item);
  };

  const tagRender = dreamType.map((value) => {
    if (!selected.some((item) => item.code === value.code)) {
      //선택 되지 않은 것들만 출력한다
      return (
        <div onClick={(e) => onClickHandler(e, value)}>
          <Tag>{value.name}</Tag>
        </div>
      );
    }
  });
  return (
    <>
      <S.Title>유형</S.Title>
      <S.TagContainer>{tagRender}</S.TagContainer>
    </>
  );
};

export default Content;
