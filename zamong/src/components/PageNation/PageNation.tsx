import State from "../../interface/State";

interface PropsType {
  indexState: State<number>;
  maxPage: number;
  columnCount: number;
}

const PageNation = ({ indexState, maxPage, columnCount }: PropsType): JSX.Element => {
  return <div></div>;
};

export default PageNation;
