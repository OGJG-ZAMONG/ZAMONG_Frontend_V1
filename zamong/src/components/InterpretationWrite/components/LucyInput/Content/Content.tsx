import { useLayoutEffect, useState } from "react";
import { getMyProfile } from "../../../../../utils/api/Profile";
import * as S from "../styles";

interface PropsType {
  lucy: number;
  setLucy: (lucy: number) => void;
}

const Content = ({ lucy, setLucy }: PropsType): JSX.Element => {
  const isNumeric = (data: string): boolean => {
    return !isNaN(Number(data));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (isNumeric(value)) {
      if (value === "") {
        setLucy(0);
      } else {
        setLucy(parseInt(value));
      }
    }
  };

  const [lucyCount, setLucyCount] = useState<number | null>(null);

  const getLucyCount = async () => {
    try {
      const response = await getMyProfile();
      setLucyCount(response.data.content.response.lucy_count);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getLucyCount();
  }, []);

  return (
    <>
      <S.Container>
        <S.Input placeholder="지급 LUCY 입력..." value={lucy} onChange={onChangeHandler} />
        {lucyCount && <S.Won>· {lucyCount} LUCY 보유</S.Won>}
      </S.Container>
    </>
  );
};

export default Content;
