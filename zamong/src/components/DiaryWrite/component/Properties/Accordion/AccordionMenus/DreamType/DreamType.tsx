import Accordion from "../../Accordion/Accordion";
import * as G from "../../../../styles";
import * as S from "./styles";
import Tag from "../../../../../../Tag/Tag";
import Header from "./Header/Header";
import Content from "./Content/Content";

const DreamType = (): JSX.Element => {
  return (
    <>
      <Accordion padding={16} header={<Header />} content={<Content />} />
    </>
  );
};

export default DreamType;
