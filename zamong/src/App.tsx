import RootRouter from "./route/index";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";

function App() {
  return (
    <>
      <Global styles={reset} />
      <RootRouter />
    </>
  );
}

export default App;
