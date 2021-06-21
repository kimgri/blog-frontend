import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div  style={{backgroundColor: "grey"}}>
       <div>
         <h1><a href="https://blogfrontend.paf.dev/">Home</a> </h1>
         <h1> <img src="/assets/paf.png" alt="paf logo"> </img></h1>
         <h1><a href="www.paf.com">paf site</a> </h1>

       </div>
    </div>

  </React.StrictMode>,
  
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
