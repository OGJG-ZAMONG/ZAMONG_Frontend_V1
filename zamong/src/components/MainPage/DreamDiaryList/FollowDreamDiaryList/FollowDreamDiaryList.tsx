import FollowDreamDiary from "../../../CardDream/FollowDreamDiary/FollowDreamDiary";
import * as I from "../Index";
import * as J from "../../Index";

const FollowDreamDiaryList = (): JSX.Element => {
  return (
    <I.Container>
      <J.SectionTitle>팔로우의 최신 꿈 일기</J.SectionTitle>
      <I.DreamPostingList>
        <FollowDreamDiary />
        <FollowDreamDiary />
        <FollowDreamDiary />
        <FollowDreamDiary />
      </I.DreamPostingList>
      <I.Button left={0}></I.Button>
      <I.Button left={100}></I.Button>
    </I.Container>
  );
};

export default FollowDreamDiaryList;
