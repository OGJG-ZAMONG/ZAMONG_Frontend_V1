import styled from "@emotion/styled";

export const ProfileContent = styled.div`
  width: 1280px;
  padding-top: 90px;
  margin: 0 auto;
`;

export const TopBox = styled.div`
  width: 100%;
  height: 321px;
`;

export const TopContent = styled.div`
  width: 621px;
  height: 197px;
  margin-top: 74px;
  display: flex;
`;

export const ProfileBox = styled.div<{ img: string }>`
  width: 200px;
  height: 197px;
  border: 1px solid blue;
  background-size: cover;
  border-radius: 120px;
  box-sizing: border-box;
  background-image: url(${(props) => props.img});
`;

export const InfoBox = styled.div`
  width: 400px;
  height: 114px;
  box-sizing: border-box;
  margin: 40px 0px 0px 24px;
`;

export const NickNameText = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`;

export const EmailText = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  color: #ffffff;
`;

export const OneLineBox = styled.div`
  width: 397px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  span {
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const NameBox = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
`;

export const SelectionBox = styled.div`
  width: 100%;
  height: 58px;
  border-top: 1px solid white;
`;

export const SelectionContent = styled.div`
  width: 484px;
  height: 58px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const ChooseBox = styled.div`
  width: 110px;
  height: 57px;
  vertical-align: middle;
  cursor: pointer;
  img {
    margin-top: 10px;
  }
  div {
    text-align: center;
  }
  span {
    margin-left: 4px;
    color: white;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    line-height: 20px;
  }
`;
