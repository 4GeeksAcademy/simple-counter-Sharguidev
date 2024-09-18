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

const MainComponent = () => {
  return  <>
    <SecondsCounter seconds={counter}/>
    <div className="d-flex mt-4 ms-3 justify-content-center">
    <button type="button" className="btn btn-outline-success ">Start</button>
    <button type="button" className="btn btn-outline-danger ms-3">Stop</button>
    <button type="button" className="btn btn-outline-warning ms-3">Reset</button>
    </div>
    
  </>
}

function myCallback() {
  // Tu código debe ir aquí
  // Los parámetros son totalmente opcionales
  counter++;
  ReactDOM.createRoot(document.getElementById('app')).render(<MainComponent/>);
  

}