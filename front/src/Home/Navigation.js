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
						'href': '/schedule/offers',
						'text': 'Update My Availability',
					},{
						'href': '/schedule',
						'text': 'See My Driving Schedule',
					},{
						'href': '/schedule/requests',
						'text': 'Schedule or Cancel Rides',
					},{
						'href': '/on-call',
						'text': 'Go On Call',
					},
				],
				'voter': [
					{
						'href': '/register',
						'text': 'Register To Vote',
					},{
						'href': '/polling-location',
						'text': 'Find My Polling Location',
					},{
						'href': '/schedule/edit',
						'text': 'Schedule or Cancel Rides',
					},{
						'href': '/on-call',
						'text': 'Go On Call',
					},
				],
			},
			'navClass': this.setNavClass(),
			'containerClass': this.setContainerClass(),
		}

		this.setNavClass = this.setNavClass.bind(this);
		this.setContainerClass = this.setContainerClass.bind(this);
		
	}

	setNavClass() {
		return this.props.greeting ? 
			null : 'main-menu hidden';
	}

	setContainerClass() {
		return this.props.greeting ? 'modal greeting' : null;
	}

	componentWillUnmount() {
		return this.props.greeting ? this.props.update('homepage', 'greeting') : null;
	}

	// navListFunction() {
	// 	return this.props.greeting ? this.props.update('homepage', 'greeting'): null;
	// }

	render() {
		return (
			<div className={ this.state.containerClass }>
				<Greeting 
					name = { this.props.user.name }
					display= { this.props.greeting }
				/>
				<NavList 
					greeting = { this.props.greeting }
					sitemap = { this.state.maps[this.props.user.type] }
					className = { this.state.navClass }
				/>
			</div>
		);
	}
}