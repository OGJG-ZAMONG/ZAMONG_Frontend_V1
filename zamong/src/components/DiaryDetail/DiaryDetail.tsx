import * as S from "./styles";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";
import Comment from "./Comment/Comment";
import { getShareDream } from "../../utils/api/DreamDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { dreamDetail } from "../../models/dto/response/dreamDetailResponse";
import { getMyProfile } from "../../utils/api/Profile";

interface paramType {
  uuid: string;
}

const DiaryDetail = (): JSX.Element => {
  const { uuid } = useParams<paramType>();
  const [userUUID, setUserUUID] = useState("");
  const [postData, setPostData] = useState<dreamDetail>({
    title: "",
    dream_types: [],
    is_shared: false,
    share_date_time: null,
    sleep_begin_date_time: "",
    sleep_end_date_time: "",
    quality: "",
    user: {
      id: "",
      profile: "",
      uuid: "",
    },
    updated_at: "",
    attachment_image: "",
    content: "",
    lucy_count: 0,
    uuid: "",
    is_liked: false,
  });

  const getUserProfile = async () => {
    try {
      const profile = await getMyProfile();
      setUserUUID(profile.data.content.response.uuid);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostData = async () => {
    try {
      const data = await getShareDream(uuid);
      setPostData({ ...data.data.content.response });
    } catch (error) {
      console.log(error);
    }
  };

  const onLikeSet = () => {
    setPostData({
      ...postData,
      is_liked: true,
      lucy_count: postData.lucy_count + 1,
    });
  };

  useEffect(() => {
    getPostData();
    getUserProfile();
  }, []);

  return (
    <S.Container>
      <Head postData={postData} userUUID={userUUID}/>
      <Posting postData={postData} onLikeSet={onLikeSet}/>
      {postData.is_shared ? <Comment postData={postData} userUUID={userUUID}/> : <></>}
    </S.Container>
  );
};

export default DiaryDetail;