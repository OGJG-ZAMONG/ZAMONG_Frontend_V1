import { useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SellWrite from "../../components/SellWrite/SellWrite";

const SellWriteContainer = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <Header />
      <SellWrite uuid={query.get("uuid")} />
      <Footer />
    </>
  );
};

export default SellWriteContainer;
