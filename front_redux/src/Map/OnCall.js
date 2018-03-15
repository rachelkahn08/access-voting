import React, { Component } from 'react';
import Navigation from '../Home/Navigation';

export default class OnCall extends Component {

	componentDidMount() {
		console.log('mapmask');
		// this.props.mapClickable
		// 	? null
		// 	: this.props.toggleMapMask(true);
		// return this.props.onCall 
		// 	? null
		// 	: this.props.toggleOnCall(true);
	}


	render() {
		return <Navigation 
					greeting={ this.props.greeting }
					user={ this.props.user } 
					update={ this.props.update } 
					toggleMapMask = { this.props.toggleMapMask }
				/>
	}
}

// stuff that needs to be in here:
// 	1) button to toggle on-call back off again (redirects to home page)
// 	2) function that searches for other users in the area
// 	3) function that places pins on the map