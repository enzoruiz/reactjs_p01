import React from "react";

export class Home extends React.Component{
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			homeLink: "El nuevo nombre del Link"
		}
	}

	onAumentarEdad(){
		this.setState({
			age: this.state.age + 3
		});
	}

	onNuevoNombreLink(){
		this.props.nuevoNombreLink(this.state.homeLink);
	}

	onGetTextInput(event){
		this.setState({
			homeLink: event.target.value
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
				<button onClick={() => this.onAumentarEdad()} className="btn btn-primary">Aumentar Edad</button>
				<hr/>
				<button onClick={this.props.mensaje} className="btn btn-primary">Mostrar Mensaje</button>
				<hr/>
				<input onChange={(event) => this.onGetTextInput(event)} type="text" value={this.state.homeLink}/>
				<button onClick={() => this.onNuevoNombreLink()} className="btn btn-primary">Cambiar Nombre Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	movies: React.PropTypes.array,
	mensaje: React.PropTypes.func,
	nuevoNombreLink: React.PropTypes.func
}