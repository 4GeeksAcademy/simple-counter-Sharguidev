import React from "react";
 import Cards from "./Cards"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-dark d-flex justify-content-center gap-1">
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
		</div>
	);
};

export default Home;
