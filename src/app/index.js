// import React from "react";
// import { render } from "react-dom";
// import { Header } from "./components/Header.js";
// import { Home } from "./components/Home.js";

// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			homeLink: "Home"
// 		}
// 	}

// 	onCambiarNuevoNombre(nuevoNombre){
// 		this.setState({
// 			homeLink: nuevoNombre
// 		});
// 	}

// 	onMostrarMensaje(){
// 		alert("Holaaaaaaaaaaa");
// 	}

// 	render(){
// 		var movies = ["Avengers", "Spiderman"]
// 		return (
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-xs-10 col-xs-offset-1">
// 						<Header homeLink={this.state.homeLink}/>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="col-xs-10 col-xs-offset-1">
// 						<Home 
// 							name={"Pepe"} 
// 							initialAge={30} 
// 							movies={movies} 
// 							mensaje={this.onMostrarMensaje}
// 							nuevoNombreLink={(nuevoNombre) => this.onCambiarNuevoNombre(nuevoNombre)} />
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// render(<App/>, window.document.getElementById("app"));

// USANDO REDUX
import { createStore, combineReducers } from "redux";

const  initialState = {
	result: 1,
	lastValues: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload] 
			}
			break;
	}
	return state;
};

const store = createStore(reducer);

store.subscribe(() => {
	console.log("Store actualizado", store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 15
});

store.dispatch({
	type: "ADD",
	payload: 50
});

store.dispatch({
	type: "SUBTRACT",
	payload: 10
});