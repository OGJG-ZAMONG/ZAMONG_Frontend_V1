import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default RootRouter;
