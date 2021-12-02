import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";
import * as S from "./styles";
import { chatResponse } from "../../models/dto/response/sellDreamDetailResponse";
import { getSellDream } from "../../utils/api/SellDetail";
import { getMyProfile } from "../../utils/api/Profile";
import Chat from "./Chat/Chat";

interface paramType {
  uuid: string;
}

const SellDatail = () => {
  const { uuid } = useParams<paramType>();
  const [postData, setPostData] = useState<chatResponse | null>(null);
  const [userUuid, setUserUuid] = useState("");

  const getPostData = async () => {
    try {
      const data = await getSellDream(uuid);
      setPostData(data.data.content.response);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const profile = await getMyProfile();
      setUserUuid(profile.data.content.response.uuid);
    } catch (error) {
      console.log(error);
    }
  };

  const settingData = async () => {
    await getUserProfile();
    await getPostData();
  };

  useEffect(() => {
    settingData();
  }, []);

  return (
    <S.Container>
      {postData && <Head postData={postData} userUuid={userUuid} />}
      {postData && <Posting postData={postData} userUuid={userUuid} settingData={settingData}/>}
      {postData && userUuid === postData.user.uuid && <Chat postData={postData} settingData={settingData}/>}
    </S.Container>
  );
};

export default SellDatail;
