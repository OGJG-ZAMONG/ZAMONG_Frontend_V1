import styled from "@emotion/styled";

export const LoginBox = styled.div`
  width: 450px;
  height: 529px;
  background-color: #2c2c2e;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  padding-top: 66px;
  padding-left: 70px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const MainContainer = styled.form`
  margin-top: 86px;
  margin-bottom: 105px;
`;

export const GuideWord = styled.div`
  color: #8e8e93;
`;

export const Input = styled.input`
  margin-top: 15px;
  width: 380px;
  height: 32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #636366;
  outline: none;
  color: white;
  font-size: 16px;
  margin-bottom: 28px;
`;

export const LinkBox = styled.div`
  font-size: 15px;
  a {
    color: #0a84ff;
    text-decoration: none;
  }

  &:last-child {
    text-align: center;
  }
`;

export const RegisterContainer = styled.div`
  width: 350px;
`;

export const LoginButton = styled.div`
  border: 1px solid transparent;
  background-color: #0a84ff;
  text-align: center;
  line-height: 2;
  margin-left: 48px;
  border-radius: 100px;
`;

export const LoginInput = styled.input`
  width: 77px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

export const EventBox = styled.div`
  display: flex;
  align-items: center;
`;
