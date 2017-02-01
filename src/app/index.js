import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";

class App extends React.Component{
	render(){
		var movies = ["Avengers", "Spiderman"]
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Pepe"} age={30} movies={movies}>
							<p>AAAAAAAAAA</p>
						</Home>
					</div>
				</div>
			</div>
		);
	}
}
render(<App/>, window.document.getElementById("app"));