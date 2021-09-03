import React, { Suspense, FC } from "react";
const Diary = React.lazy(() => import("../../components/Diary/DiaryList/DiaryList"));

const DiaryContainer:FC = ():JSX.Element => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Diary />
        </Suspense>
    )
}

export default DiaryContainer;