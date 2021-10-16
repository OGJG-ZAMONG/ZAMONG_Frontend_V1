import Diary from "../../components/Diary/DiaryList/DiaryList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const DiaryContainer = ():JSX.Element => {
    return (
      <div>
        <Header />
        <Diary />
        <Footer />
      </div>
    )
}

export default DiaryContainer;