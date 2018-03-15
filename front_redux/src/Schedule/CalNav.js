import React, { Component } from 'react';

export default class CalNav extends Component {
	constructor(props) {
		super(props);

		this.generateCells = this.generateCells.bind(this);
		this.dateSetup = this.dateSetup.bind(this);
	}

	dateSetup(date) {
		const name = this.props.date == date ? 
			'date active' :
			'date';

		return (
			<div className={ name }>{ date }</div>
		);
	}

	generateCells() {
		let key = - 1;
		let update = this.props.update;

		return this.props.week.map((day) => {
			key++; 

			return (
				<div 
					className='cell'  
					id={ key }  
					onClick={ update } 
					key={ key }
				>
					<div className='day'>{ day.day }</div>
					{ this.dateSetup(day.date) }
				</div>
			);
		})
	}

	render() {

		return (
			<div className='calendar nav'>
				{ this.generateCells() }
			</div>
		);
	}
}