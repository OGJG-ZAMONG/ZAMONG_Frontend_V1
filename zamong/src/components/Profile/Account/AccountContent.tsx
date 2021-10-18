import * as S from "./style";

const AccountContent = (): JSX.Element => {
  return (
    <>
      <S.Content>
        <S.ProfileBox>
          <S.TitleText>프로필</S.TitleText>
          <div>
            <S.SubTitle>프로필 사진 변경</S.SubTitle>
            <S.ChangeBtn>변경</S.ChangeBtn>
          </div>
        </S.ProfileBox>
        <S.AccountBox>
          <S.TitleText>계정</S.TitleText>
          <div>
            <S.SubTitle>아이디</S.SubTitle>
            <S.IdText>dsm_jingeun04</S.IdText>
            <S.ChangeBtn>변경</S.ChangeBtn>
          </div>
          <div>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.ChangeBtn>변경</S.ChangeBtn>
          </div>
          <div>
            <S.DeleteText>계정 탈퇴</S.DeleteText>
            <S.DeleteBtn>탈퇴</S.DeleteBtn>
          </div>
        </S.AccountBox>
      </S.Content>
    </>
  );
};

export default AccountContent;
