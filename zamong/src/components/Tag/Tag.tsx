import * as S from "./styles";

type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }: TagProps): JSX.Element => {
  return <S.TagContainer>{children}</S.TagContainer>;
};

export default Tag;
