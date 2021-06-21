import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div  style={{backgroundColor: "white"}}>
      <div >
       <h1 style={{backgroundColor: "blue"}}>1</h1>
      </div>
      <div >
      <h1 style={{backgroundColor: "yellow"}}>2</h1>
      </div>
        <div>
        <h1 style={{backgroundColor: "red"}}>3</h1>
       </div>
       <div>
        <h1 style={{backgroundColor: "blue"}}>4</h1>
       </div>
       <div >
      <h1 style={{backgroundColor: "yellow"}}>5</h1>
      </div>
      <div>
        <h1 style={{backgroundColor: "blue"}}></h1>
       </div>
       <div>
          <a href="https://blogfrontend.paf.dev/api/posts">GO TO POST AND USE WORKER</a>
       </div>
    </div>

  </React.StrictMode>,
  
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
