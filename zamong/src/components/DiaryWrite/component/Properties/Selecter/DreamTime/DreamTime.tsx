import { useState } from "react";
import { State, Time } from "../../../../model";
import Selecter from "../Selecter/Selecter";
import Content from "./Content/Content";

type PropsType = {
  startState: State<Time>;
  endState: State<Time>;
};

const DreamTime = ({ startState, endState }: PropsType): JSX.Element => {
  return (
    <>
      <Selecter title="수면 시각" content={<Content startState={startState} endState={endState} />} />
    </>
  );
};

export default DreamTime;
