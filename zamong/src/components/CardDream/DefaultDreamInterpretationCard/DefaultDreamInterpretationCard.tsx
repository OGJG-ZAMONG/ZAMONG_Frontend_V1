import DefaultDreamInterpretationType from "../../../interface/DefaultDreamInterpretationType";
import * as I from "../index";
import * as S from "./styles";

export const DefaultDreamInterpretationCard = ({
  image,
  title,
  content,
}: DefaultDreamInterpretationType) => {
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <I.DreamCardContainer to="" onClick={onClickHandler}>
      <I.DreamImageContainer img={image}></I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default DefaultDreamInterpretationCard;
