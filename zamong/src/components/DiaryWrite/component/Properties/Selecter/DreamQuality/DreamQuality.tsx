import * as S from "../../../styles";
import { useState } from "react";
import Selecter from "../Selecter/Selecter";

const DreamQuality = (): JSX.Element => {
  const Qualitys = [
    "😚 아주 좋아요",
    "🙂 좋아요",
    "😐 그저 그래요",
    "☹️ 안좋아요",
    "😬 아주 안좋아요",
  ];

  const Content = (): JSX.Element => {
    return (
      <>
        <S.Subtitle>🙂 좋아요</S.Subtitle>
      </>
    );
  };

  return (
    <>
      <Selecter title="꿈의 품질" content={<Content />} />
    </>
  );
};

export default DreamQuality;
