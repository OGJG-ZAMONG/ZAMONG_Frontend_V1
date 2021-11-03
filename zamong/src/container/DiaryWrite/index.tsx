import { useLocation } from "react-router";
import DiaryWrite from "../../components/DiaryWrite/DiaryWrite";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DiaryContainer = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <Header />
      <DiaryWrite dreamUUID={query.get("dreamUUID")} />
      <Footer />
    </div>
  );
};

export default DiaryContainer;
