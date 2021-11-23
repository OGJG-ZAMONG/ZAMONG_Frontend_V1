import * as S from "./styles";
import Tag from "../../Tag/Tag";
import { more } from "../../../assets";
import { dreamDetail } from "../../../models/dto/response/dreamDetailResponse";
import dreamType from "../../../constance/dreamType";
import { qualitys } from "../../../constance/dreamQualitys";
import DreamQuality from "../../DiaryWrite/component/Properties/Selecter/DreamQuality/DreamQuality";

interface PropsType {
  postData: dreamDetail;
}

const DiaryDetailHeader = ({ postData }: PropsType): JSX.Element => {
  const {
    title,
    dream_types,
    is_shared,
    share_date_time,
    sleep_begin_date_time,
    sleep_end_date_time,
    quality,
    user,
  } = postData;

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
          <S.PrifilePhoto alt="profile" src={user.profile} />
          <S.Profile>{user.id}</S.Profile>
          <img alt="more" src={more} />
        </S.UserInfo>
      </S.DreamInfo>
    </S.HeadContainer>
  );
};

export default DiaryDetailHeader;
