import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import QuickBuild from './QuickBuild';
import './Menu.css';

export default class Menu extends Component {
	constructor(props) {
		super(props);

		this.driverNav = [
			{
				'href': '/driver/availability',
				'text': 'Update My availability',
			},
			{
				'href': '/driver/schedule',
				'text': 'See My Driving Schedule',
			},
			{
				'href': '/driver/schedule/edit',
				'text': 'Schedule or Cancel Rides',
			},
			{
				'href': '/driver/on-call',
				'text': 'Go On Call',
			},
		];

		this.voterNav = [
			{
				'href': '/voter/register',
				'text': 'Register To Vote',
			},
			{
				'href': '/voter/polling-location',
				'text': 'Find My Polling Location',
			},
			{
				'href': '/voter/schedule/edit',
				'text': 'Schedule or Cancel Rides',
			},
			{
				'href': '/voter/on-call',
				'text': 'Go On Call',
			},
		];

		this.state = {
			'type': this.props.type,
			'navMenu': this.selectNavFormat(),
		}

		this.buildNavLinks = this.buildNavLinks.bind(this);
		this.selectNavFormat = this.selectNavFormat.bind(this);
		this.clear = this.clear.bind(this);
	}

	selectUserType() {
		var navMenu;

		(this.props.user.type == 'driver') ? navMenu = this.buildNavLinks(this.driverNav) : null;
		(this.props.user.type == 'voter') ? navMenu = this.buildNavLinks(this.voterNav) : null;

		return navMenu;
	}

	// buildNavLinks(template) {
	// 	let clearFunction = this.clear;
	// 	( this.props.hidden ) ? ( clearFunction = this.toggleLinks ) : null;

	// 	const navLinks = template.map((link) => {
	// 		( this.props.type == 'main' ) ? link.text = '' : null;
	// 		return <NavLink to={ link.href } onClick={ clearFunction }  className='navlink'>{ link.text }</NavLink>;
	// 	});

	// 	return navLinks;
	// }

	toggleLinks() {
		console.log('toggle');
		this.clear();
	}

	selectNavFormat() {
		let type = this.props.type;

		if (type == 'greeting') {
			return (
				<div className='modal greeting'>
					<h2>Hi, { this.props.user.name }!</h2>
					<h3>What would you like to do?</h3>
					<nav>
						{ this.selectUserType() }
					</nav>
				</div> 
			);
		} else if (type == 'main') {
			let className = ( this.props.hidden ) ? 'main-menu hidden' : 'main-menu';
			let toggle = () => { this.props.clear(this.props.type) }

			return (
				<nav className={ className } onClick={ toggle }>
					{ this.selectUserType() }
				</nav>
			);
		}
	}

	clear() {
		this.props.clear(this.props.type);
	}

	render() {
		let navMenu = this.selectNavFormat();

		return (
			<div>
				{ navMenu }
			</div>
		);
	}
}