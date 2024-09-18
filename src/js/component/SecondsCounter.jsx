import React from "react";
 import Cards from "./Cards"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = ({seconds}) => {
	
	return (
		<div className="container-fluid bg-dark d-flex justify-content-center gap-1">
			
			<Cards />
			<Cards num={Math.floor(seconds % 1000000/100000)}/>
			<Cards num={Math.floor(seconds % 100000/10000)}/>
			<Cards num={Math.floor(seconds % 10000/1000)}/>
			<Cards num={Math.floor(seconds % 1000/100)}/>
			<Cards num={Math.floor(seconds % 100/10)}/>
			<Cards num={seconds % 10}/>
		</div>
	);
};

export default SecondsCounter;
