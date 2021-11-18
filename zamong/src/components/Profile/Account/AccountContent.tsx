import { useEffect, useState } from "react";
import { getMyProfile } from "../../../utils/api/Profile";
import * as S from "./style";

interface IdType {
  id: string;
}

const AccountContent = (): JSX.Element => {
  const [idState, setId] = useState<IdType>({
    id: "",
  });

  const myId = async () => {
    try {
      const response = await getMyProfile();
      setId(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    myId();
  }, []);

  const changeProfile = () => {};
  return (
    <>
      <S.Content>
        <S.ProfileBox>
          <S.TitleText>프로필</S.TitleText>
          <S.Box>
            <S.SubTitle>프로필 사진 변경</S.SubTitle>
            <S.ChangeBtn onClick={changeProfile}>변경</S.ChangeBtn>
          </S.Box>
        </S.ProfileBox>
        <S.AccountBox>
          <S.TitleText>계정</S.TitleText>
          <S.Box>
            <S.SubTitle>아이디</S.SubTitle>
            <div>
              <S.IdText>{idState.id}</S.IdText>
              <S.ChangeBtn>변경</S.ChangeBtn>
            </div>
          </S.Box>
          <S.Box>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.ChangeBtn>변경</S.ChangeBtn>
          </S.Box>
          <S.Box>
            <S.DeleteText>계정 탈퇴</S.DeleteText>
            <S.DeleteBtn>탈퇴</S.DeleteBtn>
          </S.Box>
        </S.AccountBox>
      </S.Content>
    </>
  );
};

export default AccountContent;
