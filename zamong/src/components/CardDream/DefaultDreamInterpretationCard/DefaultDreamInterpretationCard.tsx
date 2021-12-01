import { useState } from "react";
import DefaultDreamInterpretationType from "../../../interface/DefaultDreamInterpretationType";
import * as I from "../index";

interface PropsType extends DefaultDreamInterpretationType {
  onClickHandler: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const DefaultDreamInterpretationCard = ({ image, title, onClickHandler }: PropsType) => {
  return (
    <>
      <I.DreamCardContainer to="" onClick={onClickHandler!}>
        <I.DreamImageContainer img={image}></I.DreamImageContainer>
        <I.DreamTitle>{title}</I.DreamTitle>
      </I.DreamCardContainer>
    </>
  );
};

export default DefaultDreamInterpretationCard;
