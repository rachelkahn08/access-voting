import React, { Component } from 'react';
import Navigation from './Home/Navigation';
import Login from './Home/Login';            
import MobileWarning from './MobileWarning';
import QuickBuild from './QuickBuild';


export default class Home extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			'login': true,
			'register': false,
			'user': {
				'type': null,
				'name': null,
			}
		}

		// this.confirmLogin = this.confirmLogin.bind(this);
		this.update = this.update.bind(this);
		this.getHomePage = this.getHomePage.bind(this);
	}

	update(unmount, user) {
		this.setState({
			[unmount]: false,
			'user': {
				'type': [user.type],
				'name': [user.name],
			}
		});
	}

	getHomePage() {
		return window.innerWidth > 800 ? <MobileWarning /> :
		this.state.login ? <Login update={ this.update } user={ this.state.user }/> 
		: this.state.register ? null : <Navigation greeting={ true } user={ this.state.user }/>;
		//will need to return a registration page if false
	}

	render() {
		return this.getHomePage();
	}
}