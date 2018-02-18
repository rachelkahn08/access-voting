import React, { Component } from 'react';
import QuickBuild from './QuickBuild';
import NavLI from './NavLI';

import './_Navigation.css';

export default class NavUL extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'maps': {
				'driver': [
					{
						'href': '/availability',
						'text': 'Update My availability',
					},{
						'href': '/schedule',
						'text': 'See My Driving Schedule',
					},{
						'href': '/schedule/edit',
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
			'greeting': true, 
		}
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
		return;
	}

	render() {
		const Navigation = () => {
			const build = new QuickBuild;
			const sitemap = 
				this.props.user.type == 'driver' ? this.state.maps.driver : 
				this.props.user.type == 'voter' ? this.state.maps.voter : 
				null;
			const user = this.props.user;
			const onClick = this.toggle;
			const className = this.state.greeting ? 'greeting' : 'static';
			const greeting = this.state.greeting;

			return (
				<nav className={ className }>
					{ build.nav({sitemap, user, onClick, greeting}) }
				</nav>
			);
		}

		const Greeting = () => {
			return this.state.greeting ? (
				<div>
					<h2>Hi, {this.props.user.name}!</h2>
					<h3>What would you like to do?</h3>
				</div>
			) : null
		}

		const className = () => {
			return this.state.greeting ? 'modal' : 'main-menu';
		}

		return (
			<div className={ className() }>
				<Greeting />
				<Navigation />
			</div>
		);
	}
}