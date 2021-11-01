import * as S from "./styles";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";
import Comment from "./Comment/Comment";

const DiaryDetail = (): JSX.Element => {
  return (
    <S.Container>
      <Head />
      <Posting />
      <Comment />
    </S.Container>
  );
};

export default DiaryDetail;
