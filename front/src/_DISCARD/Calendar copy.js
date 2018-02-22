import React, { Component } from 'react';

export default class Calendar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// get calendar type from route props
		// render 

		return (
			<div className='modal'>
				Calendar of {this.props.type}!
			</div>
		);
	}
}