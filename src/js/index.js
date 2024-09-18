//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let intervalID;



function renderCount() {
  // Tu código debe ir aquí
  // Los parámetros son totalmente opcionales
  counter++;
  app.render(<MainComponent/>);
  

}

let counter = 0;

const MainComponent = () => {


  return  <>
    <SecondsCounter seconds={counter}/>

    <label>Starting Value</label>
    <input className="form-control" col-3 type="number" onChange={(event)=> { 
        counter = event.target.value;
        app.render(<MainComponent/>);
    }} />
    <div className="d-flex mt-4 ms-3 justify-content-center">
      <button  onClick={()=>{

         intervalID = setInterval(renderCount, 1000);

      }} className="btn btn-outline-success ">Start</button>
      <button type="button" onClick={()=>{

          clearInterval(intervalID);
          intervalID = null;


      }}className="btn btn-outline-danger ms-3">Stop</button>


      <button type="button" onClick={()=>{
        if(intervalID){
          clearInterval(intervalID);
          counter = 0;
          app.render(<MainComponent/>);
        }else {
          counter = 0;
          app.render(<MainComponent/>);
        }
          
        
      }} className="btn btn-outline-warning ms-3">Reset</button>
    </div>
  </>
}

let app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<MainComponent/>);

// ReactDOM.createRoot(document.getElementById('app')).render(<MainComponent/>);


