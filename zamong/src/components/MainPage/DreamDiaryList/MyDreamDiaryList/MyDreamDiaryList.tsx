import MyDreamDiary from "../../../CardDream/MyDreamDiary/MyDreamDiary";
import * as I from "../style";
import * as G from "../../styles";

const MyDreamDiaryList = (): JSX.Element => {
  return (
    <I.Container>
      <G.SectionTitle>최근 적은 꿈 일기</G.SectionTitle>
      <I.DreamPostingList>
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
        <MyDreamDiary />
      </I.DreamPostingList>
      <I.Button left={0}></I.Button>
      <I.Button left={100}></I.Button>
    </I.Container>
  );
};

export default MyDreamDiaryList;
