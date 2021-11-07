import * as S from "./styles";
import { FilterIcon } from "../../../assets";
import { DownChevronIcon } from "../../../assets";
import { useState } from "react";
import Code from "../../../interface/Code";
import dreamType from "../../../constance/dreamType";
import Tag from "../../Tag/Tag";
const Filter = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Code[]>([]);

  const leftTypeRender = dreamType.map((value) => {
    return <Tag>{value.name}</Tag>;
  });

  const selectedTypeRender = selected.map((value) => {
    return <Tag>{value.name}</Tag>;
  });

  return (
    <S.FilterContainer>
      <S.FilterButton
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <img alt="filter icon" src={FilterIcon} />
        <S.FilterInner>
          필터설정
          <img alt="down chevron" src={DownChevronIcon} />
        </S.FilterInner>
      </S.FilterButton>
      {isActive && (
        <S.FilterBox>
          <S.FilterSearchContainer>
            <S.FilterSearchInput placeholder="필터 검색..." />
            <S.TagsContainer>{leftTypeRender}</S.TagsContainer>
          </S.FilterSearchContainer>
          <S.FilterAppliedContainer>
            <S.AppliedTitle>적용됨</S.AppliedTitle>
            <S.TagsContainer>{selectedTypeRender}</S.TagsContainer>
          </S.FilterAppliedContainer>
        </S.FilterBox>
      )}
    </S.FilterContainer>
  );
};

export default Filter;
