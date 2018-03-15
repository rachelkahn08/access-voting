import React, { Component } from 'react';
import logo from './logo.svg';
import './_Header.css';

export default class Header extends Component {
	render() {
		return (
			<header>
				<img src={logo} className='logo__img' alt='logo' />
				<h1 className='logo__copy'>Access Voting</h1>
			</header>
		);
	}
}