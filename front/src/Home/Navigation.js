import React, { Component } from 'react';
import QuickBuild from '../QuickBuild';

import './_Navigation.css';

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'maps': {
				'driver': [
					{
						'href': '/driver/availability',
						'text': 'Update My Availability',
					},{
						'href': '/driver/schedule',
						'text': 'See My Driving Schedule',
					},{
						'href': '/calendar/requests',
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
			'navClass': 'greeting',
			'hidden': true,
		}

		this.toggle = this.toggle.bind(this);
	}

	// 	// 	let className = ( this.props.hidden ) ? 'main-menu hidden' : 'main-menu';
	// 	// 	let toggle = () => { this.props.clear(this.props.type) }

	// 	// 	return (
	// 	// 		<nav className={ className } onClick={ toggle }>
	// 	// 			{ this.selectUserType() }
	// 	// 		</nav>
	// 	// 	);
	// 	// }
	// }
	toggle() {
		this.props.greeting ? this.props.update('greeting') :
		this.state.hidden ? this.setState({ 
			hidden: false, 
			navClass: 'main-menu'
		}) : this.setState({
			hidden: true,
			navClass: 'main-menu hidden',
		})
	}
	
	render() {
		const Navigation = () => {
			const build = new QuickBuild;
			const sitemap = 
				this.props.user.type == 'driver' ? this.state.maps.driver : 
				this.props.user.type == 'voter' ? this.state.maps.voter : 
				null;
			const user = this.props.user;
			const greeting = this.props.greeting;

			return (
				<nav className={ this.state.navClass } onClick={ this.toggle }>
					{ build.nav({sitemap, user, greeting}) }
				</nav>
			);
		}

		const Greeting = () => {
			return this.props.greeting ? (
				<div className='greeting headers'>
					<h2>Hi, {this.props.user.name}!</h2>
					<h3>What would you like to do?</h3>
				</div>
			) : null
		}

		const className = () => {
			return this.props.greeting ? 'modal' : 'main-menu';
		}

		return (
			<div className={ className() }>
				<Greeting />
				<Navigation />
			</div>
		);
	}
}