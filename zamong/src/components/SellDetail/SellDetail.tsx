import * as S from "./styles";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";

const DiaryDetail = (): JSX.Element => {
  return (
    <S.Container>
      <Head />
      <Posting />
    </S.Container>
  );
};

export default DiaryDetail;