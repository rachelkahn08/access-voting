import React, { Component } from 'react';

export default class MapControls extends Component {
	state = {
		'mode': 'driving',
		'traffic_model': 'best_guess',
		'waypoints_optimize': 'optimize:true|',
		'origin': null,
		'destination': null,
		'departure_time': null,
		'arrival_time': null,
		'waypoints': null,
	};

	inputChange = event => {
		console.log(event.target);
		let input = event.target;
		let inputName = event.target.name;
		let inputValue = event.target.value;
		let infoWindow = new window.google.maps.InfoWindow();

		return new Promise(() => {
			this.setState({[inputName]: inputValue})
			return event.target.value;
		}).then(() => {
			this.autoComplete(value);
		})	
	}

	setLocation = (event) => {
		event.preventDefault();
		const key = event.target.parentElement.id;
		const value = event.target.parentElement.children[0].value;
		this.setState({[key]: value});
	}

	autoComplete = (val) => {
		let autoComplete = new window.google.maps.places.Autocomplete(val);
				autoComplete.bindTo('bounds', this.props.map);
				infoWindow.setContent(inputValue);
	}

	sendRequest = event => {
		event.preventDefault();
	}

	componentDidMount() {
		console.log('map controls');
		console.log(this.props.map);
	}
	
	render() {
		return ( 
			<form className="modal">
				<div id = 'origin'>
					<input 
						ref = 'originInput'
						name = 'originInput'
						className="map-control__input" 
						type="text" 
						placeholder="Departure Location" 
						onChange={ this.inputChange.bind(this) }
					/>
					<button 
						className="map-control__set-button"
						onClick= { this.setLocation }
					>
						Set Departure Location
					</button>
				</div>
				<div id="destination">
					<input 
						ref = 'destinationInput'
						name = 'destinationInput'
						className="map-control__input" 
						type="text" 
						placeholder="Destination"
						onChange={ this.inputChange.bind(this) } 
					/>
					<button 
						className="map-control__set-button"
						onClick= { this.setLocation }
					>
						Set Destination
					</button>
				</div>
				<button className='get-directions'
					onClick = { this.sendRequest }
				>
					Calculate Route
				</button>
			</form>
		);
	}
}