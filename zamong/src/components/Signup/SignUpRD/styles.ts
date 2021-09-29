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
  position: fixed;
  left: 80%;
  top: 60%;
  transform: translate(-80%, -60%);
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 86px;
`;

export const GuideWord = styled.div`
  color: #8e8e93;
`;

export const NumberContainer = styled.div`
  margin-bottom: 186px;
`

export const NumberBox = styled.input`
  width: 53px;
  height: 53px;
  margin-top: 16px;
  margin-right: 12px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background-color: #636366;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
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