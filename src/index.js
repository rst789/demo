import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ExampleEff2 from "./UseEffect2";
import ExampleEffect3 from "./UseEffect3";
import ExampleEffect4 from "./UseEffect4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExampleEff2 />
    <ExampleEffect3 />
    {/*<ExampleEffect4 />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
