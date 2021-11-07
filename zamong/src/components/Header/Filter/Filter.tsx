import * as S from "./styles";
import { FilterIcon } from "../../../assets";
import { DownChevronIcon } from "../../../assets";
import { useState } from "react";
import Code from "../../../interface/Code";
import dreamType from "../../../constance/dreamType";
import Tag from "../../Tag/Tag";

interface PropsType {
  selectedState: [Code[], React.Dispatch<React.SetStateAction<Code[]>>];
}

const Filter = ({ selectedState }: PropsType): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = selectedState;
  const [searchText, setSearchText] = useState<string>("");

  const onSelectedClick = (index: number) => {
    setSelected(selected.filter((value, i) => i !== index));
  };

  const onLeftClick = (value: Code) => {
    setSelected(selected.concat(value));
  };

  const FilterleftType = (array: Code[]) =>
    array.filter((value) => selected.every((item) => value.code !== item.code));

  const RenderleftType = (array: Code[]) =>
    FilterleftType(array).map((value) => (
      <S.TagConatiner onClick={() => onLeftClick(value)}>
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
      <S.TagConatiner onClick={() => onSelectedClick(index)}>
        <Tag>{value.name}</Tag>
      </S.TagConatiner>
    );
  });

  const onSpreadClick = () => setIsActive(!isActive);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

  return (
    <S.FilterContainer>
      <S.FilterButton onClick={onSpreadClick}>
        <img alt="filter icon" src={FilterIcon} />
        <S.FilterInner>
          필터설정
          <img alt="down chevron" src={DownChevronIcon} />
        </S.FilterInner>
      </S.FilterButton>
      {isActive && (
        <S.FilterBox>
          <S.FilterAppliedContainer>
            <S.AppliedTitle>적용됨</S.AppliedTitle>
            <S.TagsContainer>{selectedTypeRender}</S.TagsContainer>
          </S.FilterAppliedContainer>
          <S.FilterSearchContainer>
            <S.FilterSearchInput
              onChange={onChangeHandler}
              value={searchText}
              placeholder="필터 검색..."
            />
            <S.TagsContainer>{leftTypeRender}</S.TagsContainer>
          </S.FilterSearchContainer>
        </S.FilterBox>
      )}
    </S.FilterContainer>
  );
};

export default Filter;
