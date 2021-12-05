import { useState } from "react";
import { DefaultDreamInterpretations } from "../../../constance/defaultDreamInterpretations";
import DefaultDreamInterpretationType from "../../../interface/DefaultDreamInterpretationType";
import { color } from "../../../style/color";
import DefaultDreamInterpretationCard from "../../CardDream/DefaultDreamInterpretationCard/DefaultDreamInterpretationCard";
import Modal from "../../DiaryWrite/component/Picker/Modal/Modal";
import Slider from "../../MainPage/Slider/Slider";
import * as S from "./styles";

const DefaultDreamInterpretation = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<DefaultDreamInterpretationType>({
    image: "",
    content: "",
    title: "",
  });

  return (
    <S.ContentInner>
      <S.Subtitle>기본 꿈 풀이</S.Subtitle>
      <Slider
        size={DefaultDreamInterpretations.length}
        columnCount={4}
        gap={20}
        pageState={[page, setPage]}
        indexState={[index, setIndex]}
      >
        {DefaultDreamInterpretations.map((value, index) => {
          const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();
            setSelected(value);
            setModal(true);
          };

          const { image, title, content } = value;
          return (
            <DefaultDreamInterpretationCard
              image={image}
              title={title}
              content={content}
              onClickHandler={onClickHandler}
              key={index}
            />
          );
        })}
      </Slider>
      {modal && (
        <Modal setModal={setModal} closeEvent={() => {}}>
          <S.ModalContainer>
            <S.Image alt="image" src={selected.image} />
            <S.Title>{selected.title}</S.Title>
            <S.Content>
              {selected.content.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </S.Content>
          </S.ModalContainer>
        </Modal>
      )}
    </S.ContentInner>
  );
};

export default DefaultDreamInterpretation;
