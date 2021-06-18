import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div  style={{backgroundColor: "blue"}}>
      <div >
       <h1 style={{backgroundColor: "blue"}}>This time we have Style!</h1>
      </div>
      <div >
      <h1 style={{backgroundColor: "yellow"}}>Wow, this styling is so good !</h1>
      </div>
        <div>
        <h1 style={{backgroundColor: "red"}}>Implemented Åland Colors</h1>
       </div>
       <div>
        <h1 style={{backgroundColor: "blue"}}>Wow</h1>
       </div>
       <div >
      <h1 style={{backgroundColor: "yellow"}}>Front page so good</h1>
      </div>
      <div>
        <h1 style={{backgroundColor: "blue"}}>backed styling style</h1>
       </div>
    </div>

  </React.StrictMode>,
  
  
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
