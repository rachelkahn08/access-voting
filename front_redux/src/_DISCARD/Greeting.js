import React, { Component } from 'react';
import NavUL from './NavUL';

export default class Greeting extends Component {
	render() {
		return (
			<div className='modal greeting'>
				<h2>Hi, {this.props.user.name}!</h2>
				<h3>What would you like to do?</h3>
				<NavUL navClass='greeting' type='greeting'/>
			</div>
		);
	}
}