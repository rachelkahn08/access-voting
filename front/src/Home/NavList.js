import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import QuickBuild from '../QuickBuild';

export default class NavList extends Component {
	constructor(props) {
		super(props);
		this.navProps = {
			'closed': {
				'left': '45px',
				'bottom': '45px',
				'transform': 'none',
				'opacity': 0,
			}, 
			'open': [
				
			]
		},
		// this.hideMenu = this.hideMenu.bind(this);
		// this.showMenu = this.showMenu.bind(this);
		// this.toggleNav = this.toggleNav.bind(this);
		this.generateNavList = this.generateNavList.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
		this.showNav = this.showNav.bind(this);
		this.hideNav = this.hideNav.bind(this);
	}

	generateNavList() {
		let propsObj = Object.assign({}, this.props);
			propsObj.className = 'navlink';
			propsObj.showText = propsObj.greeting;

			delete propsObj.greeting;

		const build = new QuickBuild;
		return build.nav(propsObj);
	}

	// componentDidUpdate() {
	// 	const burger = document.getElementById('hamburger');
	// 	burger.addEventListener('click', this.toggleNav);
	// }

	toggleNav(e) {
		let nav = e.currentTarget.parentElement;

		return nav.classList.contains('hidden') ? this.showNav(nav) : this.hideNav(nav);
	}

	showNav(nav) {
		let bubbles = nav.children;

		let animation = new window.TimelineMax;

		animation.staggerTo(bubbles, 0.2, {
			'display': 'none',
		}, 0, 0);

		animation.staggerFrom(bubbles, 0.2, {
			
		})
	}

	hideNav(nav) {
		let bubbles = nav.children;

		// let animation = new window.TimelineMax;

		// animation.staggerTo(bubbles, 0.2, {
		// 	'display': 'none',
		// }, 0, 0);

		// animation.staggerFrom(bubbles, 0.2, {
		// 	left: '45px',
		// 	bottom: '45px',
		// 	transform: 'none',
		// 	opacity: 0,
		// })
		let testArr = [1, 2, 3];
		console.log(typeof bubbles);
		console.log(typeof testArr);
	}


	// navList({...rest}) {
		
		
	// 	// this.props.greeting ? (
	// 	// 	propsObj.onClick = this.props.closeGreeting,
	// 	// 	propsObj.showText = true
	// 	// ) : (
			
	// 	// );
				
		
	// }

	// toggleNav(e) {
		
	// 	let parent = e.currentTarget.parentElement;

	// 	const show = () => {
	// 		return new Promise((resolve) => {
	// 			const animation = this.showMenu();
	// 			resolve(animation);
	// 		}).then(
	// 			parent.classList.remove('hidden')	
	// 		);
	// 	}

	// 	const hide = () => {
	// 		return new Promise((resolve) => {
	// 			const animation = this.hideMenu();
	// 			resolve(animation);
	// 		}).then(
	// 			parent.classList.add('hidden')	
	// 		);
	// 	}

	// 	return this.state.hidden ? show() : hide();
	// }

	// showMenu() {
	// 	let animation = new window.TimelineMax;
	// 	// let bubbles = this.state.navList;
	// 	console.log(this.state.navList);
	// 	let bubbles = document.querySelectorAll('.navlink');

	// 	const tweet = () => {
	// 		console.log('twet');
	// 	}

	// 	animation.add( window.TweenMax.staggerTo(
	// 		bubbles, 5, { 
	// 			'display': 'flex',
	// 			'opacity': 1 
	// 		}, 5));

	// 	animation.add( window.TweenMax.staggerFrom(bubbles, 5, {
	// 			'opacity': 0,
	// 			left: 0,
	// 			bottom: 0,
	// 			transform: 0,
	// 		}, 5));

	// }

	// hideMenu() {
	// 	console.log('hide');
	// 	return new Promise(() => {

	// 	})
	// }

	render() {
		console.log(this.unmount);
		const Burger = () => {
			return this.props.greeting ? null : (
				<div 
					onClick={ this.toggleNav } 
					id='hamburger' 
					className='hamburger'>
				</div>
			);
		}

		return (
			<nav className = { this.props.className }>
				<Burger />
				{ this.generateNavList() }
			</nav>
		)
	}
}