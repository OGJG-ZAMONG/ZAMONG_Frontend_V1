import * as S from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { InterpretationDetail } from "../../models/dto/response/InterpretationDetail";
import { getInterpretationDetail } from "../../utils/api/InterpretationDetail";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";
import Comment from "./Comment/Comment";
import { getMyProfile } from "../../utils/api/Profile";

interface paramType {
  uuid: string;
}

const IntepretationDetail = () => {
  const { uuid: postUUID } = useParams<paramType>();
  const [userUUID, setUserUUID] = useState("");
  const [postData, setPostData] = useState<InterpretationDetail>({
    uuid: "",
    title: "",
    content: "",
    updated_at: "",
    dream_types: [],
    attachment_image: "",
    user: {
      uuid: "",
      id: "",
      profile: "",
    },
    lucy_count: 0,
    is_interpretation: false,
  });

  const getPostData = async () => {
    try {
      const data = await getInterpretationDetail(postUUID);
      setPostData({ ...data.data.content.response });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const profile = await getMyProfile();
      setUserUUID(profile.data.content.response.uuid);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserProfile();
    getPostData();
  }, []);

  return (
    <S.Container>
      <Head postData={postData} userUUID={userUUID}/>
      <Posting postData={postData} />
      <Comment postData={postData} userUUID={userUUID}/>
    </S.Container>
  );
};

export default IntepretationDetail;
