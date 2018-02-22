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

	link({href, ...rest}) {
		return (
			<NavLink to={ href } {...rest}>
				{ rest.text }
			</NavLink>
		);
	}

	nav(oldProps) {
		let key = 0;
		const CustomLink = this.link;

		let newProps = Object.assign({}, oldProps);
			delete newProps.showText;
			delete newProps.sitemap;

		// console.log(props);

		return oldProps.sitemap.map((page) => {
			const text = oldProps.showText ? page.text : '';
			return (
				<NavLink
					key={ key++ } 
					to={ page.href } 
					{ ...newProps }
				>{ text }
				</NavLink>
			)
		});
	}

	table({headers, rows, ...rest}) {
		
	}

}