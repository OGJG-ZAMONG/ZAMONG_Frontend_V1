import * as S from './Styles';

type TagProps = {
    content: string;
  };
  

const Tag : React.FC<TagProps> = ({ content } : TagProps) : JSX.Element => {

    return (
        <S.TagContainer>
            <span>
                {content}
            </span>
        </S.TagContainer>
    );
}

export default Tag;