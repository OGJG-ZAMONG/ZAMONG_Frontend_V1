import * as S from "./styles";
import * as I from "../styles";
import Dream from "../../Dream/Dream";
import { DownChevron } from "../../../assets";
import { getShareDream } from "../../../utils/api/Main";
import { useEffect, useState } from "react";
import { Dream as DreamType } from "../../../models/dto/response/shareDreamResponse";
import { shareDreamRequest } from "../../../models/dto/request/shareDreamRequest";

const DreamList = (): JSX.Element => {
  const [dreams, setDreams] = useState<DreamType[]>([]);
  const [page, setPage] = useState<number>(0);

  const setDreamList = async () => {
    const param: shareDreamRequest = {
      page: page,
      size: 5,
    };

    try {
      const { share_dreams } = (await getShareDream(param)).data.content.response;
      setDreams(dreams.concat(share_dreams));
    } catch (error) {
      console.log(error);
    }
  };

  const onMore = () => {
    setPage(page + 1);
  };

  const dreamsRender = dreams.map((value) => {
    return <Dream />;
  });

  useEffect(() => {
    setDreamList();
  }, [page]);

  return (
    <>
      {dreams.length > 0 && (
        <div>
          <I.SectionTitle>공개된 꿈 목록</I.SectionTitle>
          <div>{dreamsRender}</div>
          <S.MoreContaier onClick={onMore}>
            <div>더보기</div>
            <img alt="down" src={DownChevron} />
          </S.MoreContaier>
        </div>
      )}
    </>
  );
};

export default DreamList;
