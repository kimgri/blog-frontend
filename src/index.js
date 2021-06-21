import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import companyLogo from './assets/paf.jpg';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
       <div style={{backgroundColor: "Crimson"}}>
         <h1><a href="https://blogfrontend.paf.dev/">Back to intern heaven</a> </h1>
         <h1><a href="https://www.paf.com">paf site</a> </h1>
       </div>
       <img src={companyLogo} alt="Paf logo"/>

    </div>

  </React.StrictMode>,
  
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
