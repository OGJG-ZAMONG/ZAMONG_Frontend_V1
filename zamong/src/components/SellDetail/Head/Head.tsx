import { useState } from "react";
import { useHistory } from "react-router";
import { more } from "../../../assets";
import dreamType from "../../../constance/dreamType";
import PopupContent from "../../../interface/PopupContent";
import { sellDetail } from "../../../models/dto/response/sellDreamDetailResponse";
import { delPosting } from "../../../utils/api/DreamDetail";
import PopupMenu from "../../PopupMenu/PopupMenu";
import Tag from "../../Tag/Tag";
import * as S from "./styles";

interface PropsType {
  postData: sellDetail;
  userUuid: string;
}

const Head = ({ postData, userUuid }: PropsType) => {
  const { push } = useHistory();
  const { title, uuid, dream_types, cost, updated_at, user } = postData;
  const dreamTypes = dreamType.filter((value) => {
    return dream_types.some((item) => item === value.code);
  });
  const [isActiveMore, setIsActiveMore] = useState(false);

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
        push("/sell");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const popupContents: PopupContent[] = [
    {
      name: "수정",
      callback: () => {
        push(`/sell/write?uuid=${uuid}`);
      },
    },
    {
      name: "삭제",
      callback: () => {
        deletePost();
      },
    },
  ];

  const linkProfile = () => {
    push(`/user/${user.uuid}`);
  };

  return (
    <S.HeadContainer>
      <S.Title>{title}</S.Title>
      <S.TagContainer>
        {dreamTypes.map((value, i) => {
          return <Tag key={i}>{value.name}</Tag>;
        })}
      </S.TagContainer>
      <S.DreamInfo>
        <S.ShareDay>공유한 날짜: {dayToString(updated_at)}</S.ShareDay>
        <S.BottomInfo>
          <S.Cost>{cost}원</S.Cost>
          <S.UserInfo>
            {userUuid === user.uuid ? (
              <>
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
              </>
            ) : (
              <>
                <S.PrifilePhoto
                  alt="profile"
                  src={user.profile}
                  onClick={linkProfile}
                />
                <S.Profile>{user.id}</S.Profile>
              </>
            )}
          </S.UserInfo>
        </S.BottomInfo>
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default Head;
