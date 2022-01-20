import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Supply from './context'
import store from './stores'

const update = () => ReactDOM.render(
  <React.StrictMode>
    <Supply>
      <App />
    </Supply>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(update)

update();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
