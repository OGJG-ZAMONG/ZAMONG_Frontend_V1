import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import dreamType from "../../../../constance/dreamType";
import Code from "../../../../interface/Code";
import State from "../../../../interface/State";
import Tag from "../../../Tag/Tag";
import * as S from "./styles";

interface PropsType {
  selectedState: State<Code[]>;
  isActiveState: State<boolean>;
}

const FilterContent = ({ selectedState, isActiveState }: PropsType) => {
  const [selected, setSelected] = selectedState;
  const [isActive, setIsActive] = isActiveState;
  const [searchText, setSearchText] = useState<string>("");
  const isTagClick = useRef<boolean>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const onSelectedClick = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setSelected(selected.filter((value, i) => i !== index));
    isTagClick.current = true;
  };

  const onLeftClick = (value: Code, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setSelected(selected.concat(value));
    isTagClick.current = true;
  };

  const checkCollision = (e: MouseEvent) => {
    if (!isActive) return;
    if (!containerRef.current) return;

    if (isTagClick.current) {
      isTagClick.current = false;
      return;
    }

    if (!containerRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  const FilterleftType = (array: Code[]) =>
    array.filter((value) => selected.every((item) => value.code !== item.code));

  const RenderleftType = (array: Code[]) =>
    FilterleftType(array).map((value, index) => (
      <S.TagConatiner onClick={(e) => onLeftClick(value, e)} key={index}>
        <Tag>{value.name}</Tag>
      </S.TagConatiner>
    ));

  const leftTypeRender =
    searchText.length <= 0
      ? RenderleftType(dreamType)
      : RenderleftType(
          dreamType.filter((value) => {
            const name = value.name.replace(" ", "");
            const search = searchText.replace(" ", "");

            return name.indexOf(search) !== -1;
          })
        );

  const selectedTypeRender = selected.map((value, index) => {
    return (
      <S.TagConatiner onClick={(e) => onSelectedClick(index, e)} key={index}>
        <Tag>{value.name}</Tag>
      </S.TagConatiner>
    );
  });

  const checkESC = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", checkCollision);
    window.addEventListener("keydown", checkESC);

    return () => {
      window.removeEventListener("click", checkCollision);
      window.removeEventListener("keydown", checkESC);
    };
  }, []);

  return (
    <S.FilterBox ref={containerRef}>
      <S.FilterAppliedContainer>
        <S.AppliedTitle>?????????</S.AppliedTitle>
        <S.TagsContainer>{selectedTypeRender}</S.TagsContainer>
      </S.FilterAppliedContainer>
      <S.FilterSearchContainer>
        <S.FilterSearchInput
          onChange={onChangeHandler}
          value={searchText}
          placeholder="?????? ??????..."
        />
        <S.TagsContainer>{leftTypeRender}</S.TagsContainer>
      </S.FilterSearchContainer>
    </S.FilterBox>
  );
};

export default FilterContent;
