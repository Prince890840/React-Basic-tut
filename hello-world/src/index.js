import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Components/Card';
import './index.css';
import  {BrowserRouter} from "react-router-dom";


ReactDOM.render(

  <BrowserRouter>
      <App />
  </BrowserRouter>,

  // <>
  //   <h1>Netflix Series 2021</h1>

  //   <Card imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
  //         link = "https://www.netflix.com/in/title/80100172"
  //         title = "A netflix Original Series"
  //         name = "Dark"
  //   />
  //   <Card imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
  //         link = "https://www.netflix.com/in/title/80192098"
  //         title = "A netflix Original Series"
  //         name = "Money Heist"
  //   />
  // </>,

  //  <React.StrictMode>
  //    <App />
  //  </React.StrictMode>,

  //if you use the div element,it creates extra elements in console

  /*<React.Fragment>
      <h1>Animal List Which are Available in Zoo </h1>,
      <p>Please You can Visit the Zoo.</p> 
   </React.Fragment>,*/

   /*2nd<>
      <h1>Animal List Which are Available in Zoo </h1>,
      <p>Please You can Visit the Zoo.</p> 
   </>,*/

  document.getElementById('root')
);

//Pure JavaScript

// var h2 = document.createElement("h2");
// h2.innerHTML = "Prince Bhaveshbhai Panchani";
// document.getElementById("root").appendChild(h2);

reportWebVitals();


