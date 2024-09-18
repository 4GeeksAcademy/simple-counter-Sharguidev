//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application


var intervalID = setInterval(myCallback, 1000);

let counter = 0;

function myCallback() {
  // Tu código debe ir aquí
  // Los parámetros son totalmente opcionales
  counter++;
  ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter seconds={counter}/>);
  

}