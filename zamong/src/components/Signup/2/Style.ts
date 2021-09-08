import styled from "@emotion/styled";

export const SignupBox = styled.div`
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
  margin-bottom: 86px;
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
  font-size: 20px;
  margin-bottom: 28px;
`;

export const Check = styled(Input)`
  margin-bottom: 16px;
`

export const EventBox = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PrevButton = styled.div`
  width: 62px;
  height: 32px;
  font-size: 16px;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
`;

export const NextButton = styled.div`
  width: 62px;
  height: 32px;
  font-size: 16px;
  color: white;
  border: 1px solid transparent;
  background-color: #0A84FF;
  border-radius: 100px;
  text-align: center;
  line-height: 2;
  margin-left: 16px;
`;