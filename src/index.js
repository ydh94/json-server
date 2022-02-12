import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Component } from 'react/cjs/react.production.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const handleDelete = (id) => {
  axios.delete(`www.naver.com/${id}`)
}


data.map((e, i) => {
  return <Component key={i} id={e.id} onClick={}></Component>
})