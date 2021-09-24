import React, { Suspense, FC } from "react";
const DiaryWrite = React.lazy(
  () => import("../../components/DiaryWrite/DiaryWrite")
);

const DiaryContainer: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <DiaryWrite />
    </Suspense>
  );
};

export default DiaryContainer;
