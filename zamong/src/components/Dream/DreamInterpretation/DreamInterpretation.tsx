import { useState } from "react";
import dreamType from "../../../constance/dreamType";
import * as I from "../styles";
import Tag from "../../Tag/Tag";
import { InterpretationDream } from "../../../models/dto/response/InterpretationListResponse";
import { useHistory } from "react-router";

interface PropsType {
  data: InterpretationDream;
}

const DreamInterpretation = ({ data }: PropsType): JSX.Element => {
  const { push } = useHistory();
  const [isUserImageHover, setIsUserImageHover] = useState<boolean>(false);
  const {
    default_posting_image,
    dream_types,
    title,
    updated_at,
    user,
    uuid,
    lucy_count,
  } = data;
  const { id, profile, uuid: userUUID } = user;

  const dateToString = (date: Date) => {
    if (date.getFullYear() !== new Date().getFullYear())
      return `${date.getFullYear()}-${date.getMonth() + 1}=${date.getDate()}`;

    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const renderType = dream_types.map((value, index) => {
    return (
      <Tag key={index}>
        {dreamType.find((elem) => elem.code === value)?.name}
      </Tag>
    );
  });

  return (
    <>
      <I.DreamContainer to={`/interpretation/detail/${uuid}`}>
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
            onClick={(e) => {
              e.preventDefault();
              push(`/user/${userUUID}`);
            }}
          />
          {isUserImageHover && <I.UserName>{id}</I.UserName>}
        </I.DreamImage>
        <I.DreamInfoContainer>
          <I.DreamTitle>{title}</I.DreamTitle>
          <I.DreamLucy>{lucy_count} LUCY 지급</I.DreamLucy>
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
