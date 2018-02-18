import React, { Component } from 'react';
import Navigation from './Navigation';
import Login from './Login';            
import MobileWarning from './MobileWarning';
import QuickBuild from '../QuickBuild';

export default class Home extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			'register': false,
		}

		// this.confirmLogin = this.confirmLogin.bind(this);
		// this.update = this.update.bind(this);
		this.getHomePage = this.getHomePage.bind(this);
		// this.changePage = this.changePage.bind(this);

		// 
	}

	// update(unmount, user) {
	// 	return new Promise((resolve, reject) => {
	// 		this.
	// 	// }).then(() => {
	// 	// 	this.state.login ? (
	// 	// 		this.setState({'user': user}), 
	// 	// 		this.setState({'login': false})
	// 	// 	: return
	// 	// }).then(() => {

	// 	})
	// 	// this.setState({
	// 	// 	[unmount]: false,
	// 	// 	'user': {
	// 	// 		'type': [user.type],
	// 	// 		'name': [user.name],
	// 	// 	}
	// 	// });
	// 	// .then(
	// 	// 			this.props.login({
	// 	// 				'login': false,
	// 	// 				'name': this.state.user.name,
	// 	// 				'type': this.state.user.type,
	// 	// 			})
	// 	// 		)
	// }

	getHomePage() {
		return window.innerWidth > 800 ? <MobileWarning /> :
		this.props.homepage.login ? (
			<Login 
				update={ this.props.update } 
			/> 
		) : this.state.register ? null : (
			<Navigation 
				greeting={ this.props.homepage.greeting }
				user={ this.props.user } 
				update={ this.props.update } 
			/>
		);
		//will need to return a registration page if false
		//use oauth
		// check out node passport
	}

	

	render() {
		return this.getHomePage();
	}
}