import React from "react";

export class Home extends React.Component{
	render(){
		return(
			<div>
				<p>El componente de Home</p>
				<p>Tu nombre es {this.props.name}</p>
				<p>Tu edad es {this.props.age}</p>
				<div>
					<h4>Tus peliculas</h4>
					<ul>
						{this.props.movies.map((pelicula, i) => <li key={i}>{pelicula}</li>)}
					</ul>
				</div>
				<hr/>
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	movies: React.PropTypes.array,
	children: React.PropTypes.element.isRequired
}