import * as S from "./styles";

import { FilterIcon } from "../../../assets";
import { DownChevronIcon } from "../../../assets";
import { useState } from "react";
const Filter = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

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
            <S.TagsContainer>{/* tags */}</S.TagsContainer>
          </S.FilterSearchContainer>
          <S.FilterAppliedContainer>
            <S.AppliedTitle>적용됨</S.AppliedTitle>
            <S.TagsContainer>{/* tags */}</S.TagsContainer>
          </S.FilterAppliedContainer>
        </S.FilterBox>
      )}
    </S.FilterContainer>
  );
};

export default Filter;
