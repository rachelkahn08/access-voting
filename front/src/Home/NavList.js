import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import QuickBuild from '../QuickBuild';
import PropTypes from 'prop-types';

import Greeting from './Greeting';

import './_Navigation.css';

export default class NavList extends Component {
	state = {
		open: false,
	}

	generateNavList = () => {
		const list = this.props.sitemap.map((page, i) => {
			const text = this.props.greeting 
				? page.text 
				: '';

			return (
				<NavLink
					to = { page.href }
					style = { this.openStyles(i) }
					className='navlink'
				>
					{ text }
				</NavLink>
			)
		})

		return list;		
	}

	openStyles = i => {
		const deg = i * -30;
		const delay = this.state.open
			? (this.props.sitemap.length - i) * 60
			: i * 60;
		const opacity = this.state.open 
			? '1'
			: '0';
		const style = this.state.open
			? `rotate(${deg}deg) translateX(100px)`
			: `rotate(${deg}deg) translateX(0)`;
		const click = this.state.open
			? 'initial'
			: 'none';
		
		return { transform: style, 
			transitionDelay: `${delay}ms`,
			opacity: opacity,
			bottom: '45px',
			left: '45px',
			pointerEvents: click,
		}
	}

	burgerStyles = () => {

	}

	toggleNav = () => {
		this.setState({open: !this.state.open});
	}

	render() {
		const Burger = () => {
			return this.props.greeting ? null : (
				<div 
					onClick={ this.toggleNav } 
					id='hamburger' 
					className='hamburger'>
				</div>
			);
		}

		const navClass = this.props.greeting
			? null
			: this.state.open 
			? 'main-menu'
			: 'main-menu hidden';

		return (
			<nav className = { navClass }>
				<Burger />
				{ this.generateNavList() }
			</nav>
		)
	}
}

NavList.propTypes = {
	bubbles: PropTypes.array
}