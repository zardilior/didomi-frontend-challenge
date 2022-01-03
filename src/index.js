import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import MainLayout from 'layouts/MainLayout';
import GiveConsent from 'pages/GiveConsent';
import Consents from 'pages/Consents';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="give-consent" element={<GiveConsent />} />
            <Route path="consents" element={<Consents />} />
            <Route path="*" element={<Navigate to='give-consent' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
