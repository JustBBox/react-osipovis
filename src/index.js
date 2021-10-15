import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { reduxStore } from "./store/store";
import './index.css';
import { ReduxedApp } from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={ reduxStore }>
            <ReduxedApp />
        </Provider>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
