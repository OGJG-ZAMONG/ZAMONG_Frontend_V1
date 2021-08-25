import React, { Suspense, FC } from "react";
const Login = React.lazy(() => import("../../components/Login/Login"));

const LoginContainer:FC = ():JSX.Element => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Login />
        </Suspense>
    )
}

export default LoginContainer;