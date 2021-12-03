import * as S from "./styles";
import { offCheck, onCheck } from "../../../../../assets";
import { selectComment } from "../../../../../utils/api/InterpretationDetail";

interface PropsTypes {
  postUUID: string;
  uuid: string;
}

const AdoptComment = ({ postUUID, uuid } : PropsTypes) => {

  const data = {
    dream_uuid: postUUID,
    comment_uuid: uuid,
  }

  const adoptComment = async () => {
    try {
      await selectComment(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <S.Adopt onClick={adoptComment}>
        <S.AdoptImg src={offCheck} />
        {"채택"}
      </S.Adopt>
    </>
  );
};

export default AdoptComment;
