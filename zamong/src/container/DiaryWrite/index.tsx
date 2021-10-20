import DiaryWrite from "../../components/DiaryWrite/DiaryWrite";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DiaryContainer = (): JSX.Element => {
  return (
    <div>
      <Header />
      <DiaryWrite />
      <Footer />
    </div>
  );
};

export default DiaryContainer;
