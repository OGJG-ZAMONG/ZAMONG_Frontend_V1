import * as S from "./Styles";

type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }: TagProps): JSX.Element => {
  return <S.TagContainer>{children}</S.TagContainer>;
};

export default Tag;
