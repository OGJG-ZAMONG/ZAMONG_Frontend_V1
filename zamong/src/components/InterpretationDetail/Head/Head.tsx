import * as S from "./styles";
import { InterpretationDetail } from "../../../models/dto/response/InterpretationDetail";
import dreamType from "../../../constance/dreamType";
import Tag from "../../Tag/Tag";
import PopupMenu from "../../PopupMenu/PopupMenu";
import PopupContent from "../../../interface/PopupContent";
import { useHistory } from "react-router";
import { delPosting } from "../../../utils/api/DreamDetail";
import { more } from "../../../assets";
import { useState } from "react";

interface PropsTypes {
  postData: InterpretationDetail;
  userUUID: string;
}

const InterpretationDetailHead = ({ postData, userUUID }: PropsTypes) => {
  const { uuid, title, dream_types, updated_at, user, lucy_count } = postData;
  const [isActiveMore, setIsActiveMore] = useState(false);
  const { push } = useHistory();
  const dreamTypes = dreamType.filter((value) => {
    return dream_types.some((item) => item === value.code);
  });

  const dayToString = (date: string | null) => {
    if (date !== null) {
      const a = new Date(date);
      const month = a.getMonth().toString().padStart(2, "0");
      const day = a.getDate().toString().padStart(2, "0");
      const year =
        a.getFullYear() === new Date().getFullYear()
          ? ""
          : `${a.getFullYear()}년 `;

      return `${year}${month}월 ${day}일`;
    }
  };

  const deletePost = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await delPosting(uuid);
        alert("삭제되었습니다.");
        push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupContents: PopupContent[] = [
    {
      name: "수정",
      callback: () => {
        push(`/interpretation/write?uuid=${uuid}`);
      },
    },
    {
      name: "삭제",
      callback: () => {
        deletePost();
      },
    },
  ];

  return (
    <S.HeadContainer>
      <S.Title>{title}</S.Title>
      <S.TagContainer>
        {dreamTypes.map((value, i) => {
          return <Tag key={i}>{value.name}</Tag>;
        })}
      </S.TagContainer>
      <S.DreamInfo>
        <S.LeftInfo>
        <S.Lucy>{lucy_count} LUCY 지급</S.Lucy>
        <S.ShareDay>공유한 날짜 : {dayToString(updated_at)}</S.ShareDay>
        </S.LeftInfo>
        {userUUID !== user.uuid ? (
          <S.UserInfo>
            <S.ProfileLink>
              <S.PrifilePhoto alt="profile" src={user.profile} />
              <S.Profile>{user.id}</S.Profile>
            </S.ProfileLink>
            <S.MoreBox>
              <S.More
                alt="more"
                src={more}
                onClick={() => setIsActiveMore(!isActiveMore)}
              />
              <PopupMenu
                contents={popupContents}
                isActiveMore={isActiveMore}
                setIsActiveMore={setIsActiveMore}
              />
            </S.MoreBox>
          </S.UserInfo>
        ) : (
          <></>
        )}
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default InterpretationDetailHead;
