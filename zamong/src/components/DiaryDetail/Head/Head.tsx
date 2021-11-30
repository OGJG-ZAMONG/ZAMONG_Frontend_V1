import * as S from "./styles";
import Tag from "../../Tag/Tag";
import dreamType from "../../../constance/dreamType";
import PopupMenu from "../../PopupMenu/PopupMenu";
import { useState } from "react";
import { more } from "../../../assets";
import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";
import { qualitys } from "../../../constance/dreamQualitys";
import PopupContent from "../../../interface/PopupContent";
import { useHistory } from "react-router";
import { delPosting, shareDream } from "../../../utils/api/DreamDetail";

interface PropsType {
  postData: dreamDetail;
}

const DiaryDetailHeader = ({ postData }: PropsType): JSX.Element => {
  const { push } = useHistory();
  const {
    title,
    dream_types,
    is_shared,
    share_date_time,
    sleep_begin_date_time,
    sleep_end_date_time,
    quality,
    user,
    uuid,
  } = postData;
  const [isActiveMore, setIsActiveMore] = useState(false);

  const timeToString = (date: string) => {
    const a = new Date(date);
    const hours = a.getHours();
    const minutes = a.getMinutes();

    return hours + ":" + minutes;
  };

  const dayToString = (date: string | null) => {
    if (date !== null) {
      const a = new Date(date);
      const month = a.getMonth();
      const day = a.getDate();

      return month + "월 " + day + "일";
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
        push(`/diary/write?dreamUUID=${uuid}`);
      },
    },
    {
      name: "삭제",
      callback: () => {
        deletePost();
      },
    },
  ];

  const onShareDream = async () => {
    if (window.confirm("공유하시겠습니까?")) {
      try {
        await shareDream(uuid);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const dreamTypes = dreamType.filter((value) => {
    return dream_types.some((item) => item === value.code);
  });

  const dreamQualitys = qualitys.find((value) => {
    return value.code === quality;
  })?.name;

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
          <S.PostingDate>
            <div>꿈 꾼 날짜 : {dayToString(sleep_begin_date_time)}</div>
            {is_shared ? (
              <div>공유한 날짜 : {dayToString(share_date_time)}</div>
            ) : (
              <></>
            )}
          </S.PostingDate>
          <>
            <>
              수면 시각 : {timeToString(sleep_begin_date_time)}부터{" "}
              {timeToString(sleep_end_date_time)}까지
            </>
          </>
          <div>
            <>꿈의 품질 : {dreamQualitys}</>
          </div>
        </S.LeftInfo>
        <S.UserInfo>
          {is_shared ? (
            <>
              <S.PrifilePhoto alt="profile" src={user.profile} />
              <S.Profile>{user.id}</S.Profile>
            </>
          ) : (
            <></>
          )}
          {is_shared ? (
            <></>
          ) : (
            <S.ShareButton onClick={onShareDream}>공유</S.ShareButton>
          )}
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
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default DiaryDetailHeader;
