import * as S from './styles';
import * as I from '../index';
import defaultImage from '../../../assets/DefaultPostingImages/1.jpg';

//https://codepen.io/influxweb/pen/LpoXba
const MyDreamDiary = () : JSX.Element => {

    return (
        <div>
            <I.DreamImageContainer img={defaultImage}>
                <S.LockIcon/>
                <S.DiaryDate></S.DiaryDate>
            </I.DreamImageContainer>
            <I.DreamTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
            </I.DreamTitle>
        </div>
    );
}

export default MyDreamDiary;