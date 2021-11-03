import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DiaryDetail from "../../components/DiaryDetail/DiaryDetail";

const DiaryDetailContainer = ():JSX.Element => {
    return (
      <div>
        <Header />
        <DiaryDetail />
        <Footer />
      </div>
    )
}

export default DiaryDetailContainer;