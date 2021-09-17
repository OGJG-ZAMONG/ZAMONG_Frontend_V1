import MyDreamDiary from "../../../CardDream/MyDreamDiary/MyDreamDiary";
import * as I from "../Index";
import * as J from "../../Index";

const MyDreamDiaryList = (): JSX.Element => {
  return (
    <I.Container>
      <J.SectionTitle>최근 적은 꿈 일기</J.SectionTitle>
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
