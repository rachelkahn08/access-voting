import React, { Component } from 'react';

import Greeting from './Greeting';
import NavList from './NavList';

import './_Navigation.css';

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'maps': {
				'driver': [
					{
						'href': '/profile',
						'text': 'View/Edit My Profile',
					},{
						'href': '/schedule/offers',
						'text': 'Update My Availability',
					},{
						'href': '/schedule',
						'text': 'See My Driving Schedule',
					},{
						'href': '/schedule/requests',
						'text': 'Schedule or Cancel Rides',
					},
					{
						'href': '/on-call',
						'text': 'Go On Call'
					}
				],
				'voter': [
					{
						'href': '/profile',
						'text': 'View/Edit My Profile',
					},{
						'href': '/register',
						'text': 'Register To Vote',
					},{
						'href': '/polling-location',
						'text': 'Find My Polling Location',
					},{
						'href': '/schedule/edit',
						'text': 'Schedule or Cancel Rides',
					},
					{
						'href': '/on-call',
						'text': 'Go On Call'
					}
				],
			},
			'containerClass': this.setContainerClass(),
		}
	}

	setContainerClass = () => {
		return this.props.greeting ? 'modal greeting' : null;
	}

	componentWillUnmount() {
		this.props.toggleMapMask(false);
	}


	render() {
		return (
			<div className={ this.state.containerClass }>
				<Greeting 
					name = { this.props.user.name }
					display= { this.props.greeting }
					toggleMapMask = { this.props.toggleMapMask }
					update = { this.props.update }
				/>
				<NavList 
					greeting = { this.props.greeting }
					sitemap = { this.state.maps[this.props.user.type] }
					update = { this.props.update }
				/>
			</div>
		);
	}
}