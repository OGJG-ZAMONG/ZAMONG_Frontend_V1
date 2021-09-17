import React, { Suspense, FC } from "react";
const Diary = React.lazy(() => import("../../components/Diary/DiaryList/DiaryList"));
const Header = React.lazy(() => import("../../components/Header/Header"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));

const DiaryContainer:FC = ():JSX.Element => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Header />
            <Diary />
            <Footer />
        </Suspense>
    )
}

export default DiaryContainer;