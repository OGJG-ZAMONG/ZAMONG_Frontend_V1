import React, { useEffect, useState } from "react";
import {
  changeProfile,
  getMyProfile,
  modfiyId,
} from "../../../utils/api/Profile";
import * as S from "./style";

interface IdType {
  id: string;
}

const AccountContent = (): JSX.Element => {
  const [isIdCheck, setIdCheck] = useState(true);
  const [idState, setId] = useState<IdType>({
    id: "",
  });
  const [newId, setNewId] = useState(idState.id);

  const myId = async () => {
    try {
      const response = await getMyProfile();
      setId(response.data.content.response);
    } catch (error) {
      throw error;
    }
  };

  const upProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    if (e.currentTarget.files.length <= 0) return;
    const file = e.currentTarget.files[0];
    try {
      await changeProfile(file);
      window.location.reload();
    } catch (error) {
      alert("파일 업로드에 실패했습니다.");
    }
  };

  const doChangeId = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newId: string
  ) => {
    if (newId === idState.id) {
      alert("현재 아이디와 같습니다.");
    } else {
      try {
        await modfiyId(newId);
        window.location.reload();
      } catch (error) {
        throw error;
      }
    }
  };

  const changeIdBtn = (e: any) => {
    if (e) {
      if (isIdCheck === false) {
        setIdCheck(true);
      } else if (isIdCheck === true) {
        setIdCheck(false);
      }
    }
  };

  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(e.target.value);
  };

  useEffect(() => {
    myId();
  }, []);

  useEffect(() => {
    setNewId(idState.id);
  }, [idState.id]);

  return (
    <>
      <S.Content>
        <S.ProfileBox>
          <S.TitleText>프로필</S.TitleText>
          <S.Box>
            <S.SubTitle>프로필 사진 수정</S.SubTitle>
            <S.FileBox>
              <S.FileText htmlFor="profile">변경</S.FileText>
              <S.FileBtn
                type="file"
                accept="image/*"
                onChange={upProfile}
                id="profile"
              />
            </S.FileBox>
          </S.Box>
        </S.ProfileBox>
        <S.AccountBox>
          <S.TitleText>계정</S.TitleText>
          <S.Box>
            <S.SubTitle>아이디</S.SubTitle>
            <div>
              {isIdCheck ? (
                <S.IdText>{idState.id}</S.IdText>
              ) : (
                <S.inputId
                  onChange={(e) => changeId(e)}
                  defaultValue={idState.id}
                ></S.inputId>
              )}
              {isIdCheck ? null : (
                <S.ChangeBtn onClick={(e) => doChangeId(e, newId)}>
                  변경
                </S.ChangeBtn>
              )}
              {isIdCheck ? (
                <S.ChangeBtn onClick={(e) => changeIdBtn(e)}>변경</S.ChangeBtn>
              ) : (
                <S.CancelBtn onClick={(e) => changeIdBtn(e)}>취소</S.CancelBtn>
              )}
            </div>
          </S.Box>
          <S.Box>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.ChangePwBtn to="/findpassword">변경</S.ChangePwBtn>
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
