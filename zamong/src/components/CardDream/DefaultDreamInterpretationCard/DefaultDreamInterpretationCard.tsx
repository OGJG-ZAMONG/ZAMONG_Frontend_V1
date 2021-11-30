import DefaultDreamInterpretationType from "../../../interface/DefaultDreamInterpretationType";
import * as I from "../index";

export const DefaultDreamInterpretationCard = ({
  image,
  title,
  content,
}: DefaultDreamInterpretationType) => {
  return (
    <I.DreamCardContainer to="/">
      <I.DreamImageContainer img={image}>{content}</I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default DefaultDreamInterpretationCard;
