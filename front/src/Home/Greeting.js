import React, { Component } from 'react';

export default class Greeting extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Display = () => {
			return this.props.display ? (
				<div className='headers'>
					<h2>Hi, {this.props.name}!</h2>
					<h3>What would you like to get done?</h3>
				</div>
			) : null;
		}
		return (
			<Display />
		);
	}
}