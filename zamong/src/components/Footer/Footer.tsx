import * as S from './Styles';
import LinkIcon from '../../assets/icons/link.svg';
import Github from '../../assets/icons/github.svg';
import { Link } from 'react-router-dom';
const Footer = () : JSX.Element => {

    return (
        <>
            <S.FooterContainer>
                <S.Line/>
                <S.Inner>
                    <S.FooterTitle><img alt="link" src={LinkIcon}/>Links</S.FooterTitle>
                    <S.Flex>
                        <a href="https://github.com/OGJG-ZAMONG" target='_blank' rel="noreferrer"><S.FooterContentDiv>
                            <img alt='github' src={Github} width='24'/>Github </S.FooterContentDiv>
                        </a>
                    </S.Flex>
                    <S.Flex><S.FooterContent to='/'>광고 안내 </S.FooterContent></S.Flex>
                    <S.Flex><S.FooterContent to='/'>이용 약관 </S.FooterContent></S.Flex>
                </S.Inner>
                <S.CopyRight>2021 Team 옹기종기 | Copyright ⓒ 자몽 Corp. All Rights Reserved.</S.CopyRight>
            </S.FooterContainer>
        </>
    );
}

export default Footer;