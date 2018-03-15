import React, { Component } from 'react';
import GoogleApi from './GoogleApi';

import './_MapWindow.css';

export default class MapWindow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'loading': true,
			'static': false,
			'scriptSrc': null,
			'src': {
				'url': 'https://maps.googleapis.com/maps/api/',
				'key': '&key=AIzaSyDheXoj7wmoVbo6i0YsflxSE6iTk1IY6KE',
				'type': this.setType(),
				'initMap': '&callback=initMap',
			}, 
			'options': {
				'mode': 'driving',
				'traffic_model': 'best_guess',
				'waypoints_optimize': 'optimize:true|',
				'center': null,
				'origin': this.setOrigin(),
				'destination': null,
				'departure_time': null,
				'arrival_time': null,
				'waypoints': null,
			},

			
		}

		this.loading = this.loading.bind(this);
		this.setOrigin = this.setOrigin.bind(this);
		this.setType = this.setType.bind(this);
		this.initGoogle = this.initGoogle.bind(this);
	}

	loading() {
		return this.state.loading ? (
			<div className='loading-mask'></div>
		) : null;
	}

	setType() {
		return this.props.directions ? 'directions/json?' : 'js?';
	}

	setOrigin() {
		return new Promise((resolve, reject) => {
			const success = position => {
				const origin = `${position.coords.latitude},${position.coords.longitude}`;
				resolve(origin);
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

	buildURL() {
		const g = this.state.src;

		const options = () => {
			// return this.props.directions ? (() => {
			// 	return navigator.geolocation ? this.getOrigin().then((origin) => {
			// 		return this.state.url + this.state.key + '&origin=' + origin;
			// 	}) : null;
			// }) : g.initMap;


			// check if directions
			// yes : 
				// 
		}

		const url =  g.url + g.type + g.key + options();

		let state = this.state.src;
		
		this.setState({'scriptSrc': url});
		return url;
	}

	// getOrigin() {
	// 	return new Promise((resolve, reject) => {
	// 		const success = position => {
	// 			const origin = `${position.coords.latitude},${position.coords.longitude}`;
	// 			this.setState({'options[origin]': origin});
	// 			resolve(origin);
	// 		}

	// 		const fail = err => {
	// 			const oops = { 
	// 			    1: 'Permission denied',
	// 			    2: 'Position unavailable',
	// 			    3: 'Request timeout'
	// 			};
				
	// 			const error = oops[err.code];
	// 			reject(error);
	// 		}

	// 		navigator.geolocation.getCurrentPosition(success, fail);
	// 	});
	// }

	initGoogle() {
		const src = this.state.src;
		let oldScript = document.getElementById('googleScript');

		const replace = () => {
			oldScript.parentElement.removeChild(oldScript);
			buildScript();
		}

		const buildScript = () => {
			let newScript = document.createElement('script');
				newScript.id = 'googleScript';
				newScript.src = this.buildURL();
				newScript.async = true;
				newScript.defer = true;
			document.body.appendChild(newScript);
		}


		!oldScript ? buildScript() :
			oldScript.src == src ? null :
			replace();	
	}

	componentDidMount() {
		this.initGoogle();
	}

	render() {
		return (
			<div className='map-window'>
				{ this.loading() }
				<div 
					ref='map' 
					id='map' 
					className='map'>
				</div>
			</div>
		);
	}
}



fetchScript(url) {
		// console.log('fetching');

		// let script = document.getElementById('googleScript');
		// console.log(script);

		// const update = () => {
		// 	console.log('update');
		// 	script.url == url ? () => {
		// 		console.log('potato');
		// 		script.src = 'potato';
		// 	} : () => {
		// 		script.src = url;
		// 	};
		// }
		
		// return new Promise((resolve) => {
		// 	const it = update();

		// 	resolve(it);
		// })
		// return this.state.fetchURL ?
		// 	this.state.fetchURL = url ? null :
		// 	(() => {
		// 		this.setState({'fetchURL': url});
		// 		return fetch(url, {

		// 	});

		// if ( !this.state.url ) {
		// 	// fetchURL
		// } else if ( this.state.url != url ) {

		// } else {
		// 	return;
		// }
		
		// let oldScript = document.getElementById('googleScript');


		// const buildTag = () => {
		// 	let newScript = document.createElement('script');
		// 		newScript.id = 'googleScript';
		// 		newScript.src = url;
		// 		newScript.async = true;
		// 		newScript.defer = true;
		// 	document.body.appendChild(newScript);
		// }

		// const appendScript = !oldScript ? buildTag() :
		// 	oldScript.src == url ? null :
		// 	replace();	
		
		// return new Promise((resolve) => {
		// 	resolve(appendScript);
		// }).then(() => {
		// 	let map = new window.google.maps.Map(document.getElementById('map'), {
		//       center: {lat: -33.8688, lng: 151.2195},
		//       zoom: 13,
		//       mapTypeId: 'roadmap',
		//     });

		//     console.log(map);
		// });

		// this.

		// return 
	}