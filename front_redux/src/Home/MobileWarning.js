import React, { Component } from 'react';

export default class MobileWarning extends Component {
	render() {
		return (
			<div>
				<div className="mobile-warning">
					<h1>Oops!</h1>
					<h2>This website is intended for mobile use only</h2>
					<p>Please reopen this page on a moble device.</p>
				</div>
			</div>
		);
	}
}