import * as S from "./styles";
import { FilterIcon } from "../../../assets";
import { DownChevronIcon } from "../../../assets";
import { useState } from "react";
import Code from "../../../interface/Code";
import State from "../../../interface/State";
import FilterContent from "./FilterContent/FilterContent";

interface PropsType {
  selectedState: State<Code[]>;
}

const Filter = ({ selectedState }: PropsType): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSpreadClick = () => setIsActive(!isActive);
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
        <FilterContent selectedState={selectedState} isActiveState={[isActive, setIsActive]} />
      )}
    </S.FilterContainer>
  );
};

export default Filter;
