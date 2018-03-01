import React, { Component } from 'react';
import Navigation from './Navigation';
import Login from './Login';            
import MobileWarning from './MobileWarning';

// import QuickBuild from '../QuickBuild';

export default class Home extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			'register': false,
		}

		this.getHomePage = this.getHomePage.bind(this);
	}

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
				maskMap = { this.props.maskMap }
			/>
		);
		// will need to return a registration page if false
		//use oauth
		// check out node passport
	}

	componentWillUnmount() {
		return this.props.maskMap(false);
	}

	render() {
		return this.getHomePage();
	}
}