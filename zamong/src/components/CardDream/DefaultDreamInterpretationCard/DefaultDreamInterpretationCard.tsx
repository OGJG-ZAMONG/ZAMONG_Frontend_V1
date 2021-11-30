import * as I from "../index";

interface PropsType {
  image: string;
  title: string;
  content: string;
}

export const DefaultDreamInterpretationCard = ({ image, title, content }: PropsType) => {
  return (
    <I.DreamCardContainer to="/">
      <I.DreamImageContainer img={image}>{content}</I.DreamImageContainer>
      <I.DreamTitle>{title}</I.DreamTitle>
    </I.DreamCardContainer>
  );
};

export default DefaultDreamInterpretationCard;
