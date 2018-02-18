import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


export default class QuickBuild {

	packageProps(component, ...rest) {
		const propsObj = Object.assign({}, ...rest);
		return React.createElement(component, propsObj);
	}

	route({component, ...rest}) {
		return (
			<Route { ...rest } 
				render = {
					props => {
						return this.packageProps(component, props, rest);
					}
				} 
			/>
		)
	}

	link({component, greeting, linktext, to, ...rest}) {
		const Text = greeting ? linktext : null;

		return (
			<NavLink to={ to } {...rest}>
				{ Text }
			</NavLink>
		);
	}

	nav({sitemap, ...rest}) {
		const LinkButton = this.link;
		let key = 0;
		return sitemap.map((page) => {
			return <LinkButton 
				key={ key++ } 
				className='navlink' 
				component={ NavLink } 
				to={ page.href } 
				linktext={ page.text } 
				{ ...rest } 
			/>
		});
	}

}