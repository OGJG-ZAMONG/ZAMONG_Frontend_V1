import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Head from "./Head/Head";
import Posting from "./Posting/Posting";
import * as S from "./styles";
import { sellDetail } from "../../models/dto/response/sellDreamDetailResponse";
import { getSellDream } from "../../utils/api/SellDetail";

interface paramType {
  uuid: string;
}

const SellDatail = () => {
  const { uuid } = useParams<paramType>();
  const [postData, setPostData] = useState<sellDetail>({
    title: "",
    dream_types: [],
    user: {
      id: "",
      profile: "",
      uuid: "",
    },
    updated_at: "",
    attachment_image: "",
    content: "",
    uuid: "",
    cost: 0,
    status: "",
  });

  const getPostData = async () => {
    try {
      const data = await getSellDream(uuid);
      setPostData({ ...data.data.content.response });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <S.Container>
      <Head postData={postData}/>
      <Posting postData={postData}/>
    </S.Container>
  )
};

export default SellDatail;
