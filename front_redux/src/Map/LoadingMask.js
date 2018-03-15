import React, { Component } from 'react';

export default class LoadingMask extends Component {
	maskStatus = () => {
		return this.props.loading 
			? 'loading-mask'
			: this.props.clickable
			? 'loading-mask inactive'
			: 'loading-mask transparent';
	}

	render() {
		return <div className={ this.maskStatus() }></div>
	}
}