import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  display: inline;
`;

export const TodayContainer = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  min-height: 711px;

  margin: 0 auto;
  min-height: 711px;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const TodayDream = styled.div`
  height: 711px;
  width: 650px;
  background-color: #2c2c2e;
  border-radius: 10px;
  padding-left: 10px;
`;

export const TodayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TodayDreamText = styled.div`
  width: 37px;
  height: 25px;
  color: white;
  font-weight: 500;
  margin: 16px 0 4px 0;
  font-size: 20px;
`;

export const DiarySignContainer = styled.div`
  height: 93%;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(2, 48%);
  grid-gap: 15px;
`;

export const DiaryListContainer = styled.div`
  height: 100vh;
  width: 1280px;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const DiaryListTitle = styled.div`
  height: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const DiaryListHeader = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
`;

export const DiaryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 15px;
`;

export const WriteDiary = styled.div`
  aspect-ratio: 3/2; 
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 3/2;
  border-radius: 20px;
  cursor: pointer;
  backdrop-filter: blur(20px);
  background-color: #2c2c2e;
`;

export const WriteDiaryText = styled.div`
  margin: 89px 86px;
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 20px;
  color: #c7c7cc;
  display: flex;
  justify-content: center;
`;

export const WriteDiaryImg = styled.img`
  margin-right: 10px;
`;

export const HeaderSelections = styled.div`
  height: 24px;
  display: flex;
`;

export const HeaderSelect = styled.div`
  height: 100%;
  margin-left: 25px;
  display: flex;
  cursor: pointer;
  input {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin: -5px 5px 0 0;
  }
  label {
    width: 45px;
    height: 20px;
  }

  img {
    width: 20px;
    height: 9px;
    margin: 3px;
    cursor: pointer;
  }
`;
