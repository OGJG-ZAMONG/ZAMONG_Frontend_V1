import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InterpretationWrite from "../../components/InterpretationWrite/InterpretationWrite";

const InterpretationWriteContainer = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);

  return (
    <>
      <Header />
      <InterpretationWrite uuid={query.get("uuid")} />
      <Footer />
    </>
  );
};

export default InterpretationWriteContainer;
