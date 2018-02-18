import React, { Component } from 'react';
import Login from './Login';
import Menu from './Menu';
import './Menu.css';
import './Interactions.css';

export default class Interactions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'login': false,
			'greeting': false,
			'main': false,
			'hidden': true,
		}

		this.selectInteraction = this.selectInteraction.bind(this);
		this.clearInteraction = this.clearInteraction.bind(this);
	}

	componentWillMount() {
		this.setState({'login': this.checkLogin()});
	}

	checkLogin() {
	 // ping server and see if already logged in
	 // set login val accordingly
	 // temporary code:
	 	return true; 
	}

	clearInteraction(unmount) {
		(unmount == 'login') ? this.setState({'login': false, 'greeting': true}) : null;
		(unmount == 'greeting') ? this.setState({'greeting': false, 'main': true}) : null;
		
		if (unmount == 'main') {
			( this.state.hidden ) ? this.setState({'hidden': false}) : this.setState({'hidden' : true});
		}
	}

	selectInteraction() {
		if (this.state.login) {
			return (
				<div className='modal login'>
					<Login clear={ this.clearInteraction } />
				</div>
			);
		} else if (this.state.greeting) {
			return <Menu clear={ this.clearInteraction } user={ this.props.user } type='greeting' next='main'/>;
		} else if (this.state.main) {
			return <Menu clear={ this.clearInteraction } user={ this.props.user } type='main' hidden={ this.state.hidden }/>;
		}
	}

	render() {
		let renderObj = this.selectInteraction();

		return (
			<div>
				{ renderObj }
			</div>
		);
	}
}