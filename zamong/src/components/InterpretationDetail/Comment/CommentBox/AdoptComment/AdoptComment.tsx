import * as S from "./styles";
import { offCheck, onCheck } from "../../../../../assets";
import { selectComment } from "../../../../../utils/api/InterpretationDetail";
import {
  Comment,
} from "../../../../../utils/api/DreamDetail";

interface PropsTypes {
  postUUID: string;
  uuid: string;
  is_interpretation: boolean;
  comment: Comment;
  settingComment: () => Promise<void>
}

const AdoptComment = ({ postUUID, uuid, comment, is_interpretation, settingComment } : PropsTypes) => {
  const { is_selected } = comment;
  const data = {
    dream_uuid: postUUID,
    comment_uuid: uuid,
  }

  const adoptComment = async () => {
    if(is_interpretation){
      alert("이미 채택을 하셨습니다.");
      return;
    }
    try {
      await selectComment(data);
      settingComment();
    } catch (error) {
      console.log(error);
    }
  }

  const alreadyAdopt = () => {
    alert("이미 채택된 댓글입니다.");
  }

  return (
    <>
    {
      is_selected ? (
      <S.OnAdopt onClick={alreadyAdopt}>
        <S.AdoptImg src={onCheck} />
        {"채택됨"}
      </S.OnAdopt>

      ) : (
        <S.Adopt onClick={adoptComment}>
        <S.AdoptImg src={offCheck} />
        {"채택"}
      </S.Adopt>
      )
    }
    </>
  );
};

export default AdoptComment;
