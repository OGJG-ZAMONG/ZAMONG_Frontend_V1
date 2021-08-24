import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle"

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);