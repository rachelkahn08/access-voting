import React, { Component } from 'react';

export default class LoadingMask extends Component {
	constructor(props) {
		super(props);

		this.fadeLoading = this.fadeLoading.bind(this);
	}

	fadeLoading() {
		return <div className='loading-mask transparent'></div>
	}

	render() {
		const ManageLoading = () => {
			return this.props.state.loading ? (
				<div className='loading-mask'></div>
			) : this.props.state.blocked ? this.fadeLoading()
			: null;
		}

		return <ManageLoading />
	}
}