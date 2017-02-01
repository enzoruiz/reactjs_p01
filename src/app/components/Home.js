import React from "react";

export class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			age: props.initialAge
		}
	}

	onAumentarEdad(){
		this.setState({
			age: this.state.age + 3
		});
	}

	render(){
		return(
			<div>
				<p>El componente de Home</p>
				<p>Tu nombre es {this.props.name}</p>
				<p>Tu edad es {this.state.age}</p>
				<div>
					<h4>Tus peliculas</h4>
					<ul>
						{this.props.movies.map((pelicula, i) => <li key={i}>{pelicula}</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}
				<hr/>
				<button onClick={() => this.onAumentarEdad()} className="btn btn-primary">Aumentar Edad</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	movies: React.PropTypes.array,
	children: React.PropTypes.element.isRequired
}