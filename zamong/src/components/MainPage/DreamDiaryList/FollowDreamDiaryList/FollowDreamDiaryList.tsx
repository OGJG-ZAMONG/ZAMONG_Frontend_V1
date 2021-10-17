import FollowDreamDiary from "../../../CardDream/FollowDreamDiary/FollowDreamDiary";
import * as I from "../style";
import * as G from "../../globalstyle";

const FollowDreamDiaryList = (): JSX.Element => {
  return (
    <I.Container>
      <G.SectionTitle>팔로우의 최신 꿈 일기</G.SectionTitle>
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
