import React, { useEffect, useState } from "react";
import {
  accountSecession,
  changeProfile,
  getMyProfile,
  modfiyId,
  changePw,
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
  const [isPwCheck, setPwCheck] = useState(true);
  const [newPw, setNewPw] = useState("");
  const [oldPw, setOldPw] = useState("");

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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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

  const doChangePW = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    oldPw: string,
    newPw: string
  ) => {
    if (oldPw === newPw) {
      alert("현비밀번호과 바꿀 비밀번호가 똑같습니다.");
    } else {
      try {
        await changePw(oldPw, newPw);
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

  const changeOldPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPw(e.target.value);
  };

  const changeNewPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPw(e.target.value);
  };

  const changePwBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      if (isPwCheck === false) {
        setPwCheck(true);
      } else if (isPwCheck === true) {
        setPwCheck(false);
      }
    }
  };

  const clickDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const input = confirm("탈퇴하시겠습니까?");
    if (input === true) {
      const inputString = prompt("현재 비밀번호를 입력하세요", "비밀번호");
      alert(inputString);
      doDelete(inputString!);
    } else if (input === false) {
      alert("취소가 되었습니다.");
    }
  };

  const doDelete = async (pw: string) => {
    try {
      await accountSecession(pw);
    } catch (error) {
      alert("비밀번호가 틀렸습니다.");
    }
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
            <S.IdContainer>
              {isIdCheck ? (
                <S.IdText>{idState.id}</S.IdText>
              ) : (
                <S.Input
                  onChange={(e) => changeId(e)}
                  defaultValue={idState.id}
                />
              )}
              {isIdCheck ? null : (
                <S.BorderButton onClick={(e) => doChangeId(e, newId)}>
                  변경
                </S.BorderButton>
              )}
              {isIdCheck ? (
                <S.BorderButton onClick={(e) => changeIdBtn(e)}>
                  변경
                </S.BorderButton>
              ) : (
                <S.BorderButtonRed onClick={(e) => changeIdBtn(e)}>
                  취소
                </S.BorderButtonRed>
              )}
            </S.IdContainer>
          </S.Box>
          <S.PwBox height={isPwCheck ? 180 : null}>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.PwContainer>
              <div>
                {isPwCheck ? null : (
                  <S.BorderButton onClick={(e) => doChangePW(e, oldPw, newPw)}>
                    변경
                  </S.BorderButton>
                )}
                {isPwCheck ? (
                  <S.BorderButton onClick={(e) => changePwBtn(e)}>
                    변경
                  </S.BorderButton>
                ) : (
                  <S.BorderButtonRed onClick={(e) => changePwBtn(e)}>
                    취소
                  </S.BorderButtonRed>
                )}
              </div>
              {isPwCheck ? null : (
                <>
                  <S.InputContainer>
                    <S.Input
                      onChange={(e) => changeOldPw(e)}
                      placeholder="현재 비밀번호를 입력해 주세요."
                    />
                    <S.Input
                      onChange={(e) => changeNewPw(e)}
                      placeholder="새로운 비밀번호를 입력해 주세요."
                    />
                  </S.InputContainer>
                </>
              )}
            </S.PwContainer>
          </S.PwBox>
          <S.Box>
            <S.DeleteText>계정 탈퇴</S.DeleteText>
            <S.BorderButtonRed onClick={clickDelete}>탈퇴</S.BorderButtonRed>
          </S.Box>
        </S.AccountBox>
      </S.Content>
    </>
  );
};

export default AccountContent;
