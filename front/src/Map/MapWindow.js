import React, { Component } from 'react';
import LoadingMask from './LoadingMask';
import MapControls from './MapControls';

import './_MapWindow.css';

export default class MapWindow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'fetchURL': null,
			'google': null,
			'location': {},
			'mapSrc': {
				'url': 'https://maps.googleapis.com/maps/api/',
				'key': '&key=AIzaSyDheXoj7wmoVbo6i0YsflxSE6iTk1IY6KE',
			}, 
			'static': {
				'center': null,
				'zoom': 18,
				'initMap': '&callback=initMap',
			}, 
			'directions': {
				'mode': 'driving',
				'traffic_model': 'best_guess',
				'waypoints_optimize': 'optimize:true|',
				'origin': null,
				'destination': null,
				'departure_time': null,
				'arrival_time': null,
				'waypoints': null,
			},
			'loading': true,
			'mapObj': null, 
		}

		this.getLocation = this.getLocation.bind(this);
		this.mapSetup = this.mapSetup.bind(this);
		this.buildURL = this.buildURL.bind(this);
	}

	mapSetup() {
		return this.getLocation().then((location) => {
			this.setState({'location': location})
			return this.buildURL(location.origin);
		});
	}

	getLocation() {
		return new Promise((resolve, reject) => {
			const success = position => {
				const location = {
					'latlng': {
						'lat': position.coords.latitude,
						'lng': position.coords.longitude
					},
					'origin': `${position.coords.latitude},${position.coords.longitude}`,
				}

				resolve(location);
			}

			const fail = err => {
				const oops = { 
				    1: 'Permission denied',
				    2: 'Position unavailable',
				    3: 'Request timeout'
				};
				
				const error = oops[err.code];
				reject(error);
			}

			navigator.geolocation.getCurrentPosition(success, fail);
		});
	}

	sendDirectionRequest = (obj) => {

	}

	buildURL(location) {
		const library = this.props.directions ? 'directions/json?' : 'js?';
		const origin = this.props.directions ? (
			'&origin=' + location
		) : '';

		const src = this.state.mapSrc;
		return ( src.url + library + src.key + origin );
	}

	initMap(center) {
		const params = {
			center: center,
			zoom: 14,
			mapTypeId: 'roadmap',
		}

		const map = new window.google.maps.Map(document.getElementById('map'), params);

		return map;
	}

	goOnCall = () => {
		return this.props.onCall
			? <MapControls map={ this.state.map } />
			: null;
	}

	componentDidMount() {
		return this.getLocation().then((location) => {
			return this.initMap(location.latlng)
		}).then((map) => {
			this.setState({'mapObj': map});
			return map;
		}).then((map) => {
			console.dir(map);
			console.dir(this.state.mapObj);
			document.getElementById('map').style.position = 'absolute';
			this.setState({'loading': false});
		});
	}
	
	// OPTIONAL: find nearby users
	// select a user 
	// get a route

	render() {

		const mapMask = () => {
			return this.state.loading
				? 'loading-mask'
				: this.props.clickable 
				? 'loading-mask inactive'
				: 'loading-mask transparent';
		}

		return (
			<div className='map-window'>
				<div className={ mapMask() }></div>
				<div 
					ref='map' 
					id='map' 
				>
				</div>
				{ this.goOnCall() }
			</div>
		);
	}
}