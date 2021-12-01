import { useState } from "react";
import dreamType from "../../../constance/dreamType";
import * as I from "../styles";
import Default from "../../../assets/DefaultPostingImages/1.jpg";
import Tag from "../../Tag/Tag";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";

interface PropsType {
  data: InterpretationDream;
}

const DreamInterpretation = ({ data }: PropsType): JSX.Element => {
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);
  const { default_posting_image, dream_types, title, updated_at, user, uuid } = data;
  const { id, profile } = user;

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const renderType = dream_types.map((value) => {
    return <Tag>{dreamType.find((elem) => elem.code === value)?.name}</Tag>;
  });

  return (
    <>
      <I.DreamContainer to={`/interpretation/${uuid}`}>
        <I.DreamImage img={default_posting_image}>
          <I.DreamUserImage
            alt="user image"
            src={profile}
            onMouseEnter={() => {
              setIsUserImageHover(true);
            }}
            onMouseLeave={() => {
              setIsUserImageHover(false);
            }}
          />
          {isUserImageHover && <I.UserName>{id}</I.UserName>}
        </I.DreamImage>
        <I.DreamInfoContainer>
          <I.DreamTitle>{title}</I.DreamTitle>
          <I.DreamLucy>21 LUCY 지급</I.DreamLucy>
          <I.DreamDate>{dateToString(new Date(updated_at))}</I.DreamDate>
        </I.DreamInfoContainer>
        <I.DreamTagContainer>
          <I.DreamTagInner>{renderType}</I.DreamTagInner>
        </I.DreamTagContainer>
      </I.DreamContainer>
      <I.Line />
    </>
  );
};

export default DreamInterpretation;