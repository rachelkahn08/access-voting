import React, { Component } from 'react';

export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'timeslots': [
				{
					'slot': '08:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '09:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '10:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '11:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '12:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '01:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '02:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '03:00',
					'top': null,
					'bottom': null,
				},
				{
					'slot': '04:00',
					'top': null,
					'bottom': null,
				},
			],
		}

		this.generateDay = this.generateDay.bind(this);
		this.buildTimeslot = this.buildTimeslot.bind(this);
	}

	generateDay() {
		return this.state.timeslots.map((slot) => {
			return this.buildTimeslot(slot);
		});
	}

	checkSlotValue(val) {
		return val ? val : '';
	}

	buildTimeslot(time) {
		return (
			<div className='timeslots slot'>
				<div className='hour'>{ time.slot }</div>
				<div className='events'>
					<div className='top'>{ this.checkSlotValue(time.top) }</div>
					<div className='bottom'>{ this.checkSlotValue(time.bottom) }</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='calendar list'>
				<h2>{this.props.day.month + ' ' + this.props.day.date}</h2>
				<div className='scrollbox'>
					<div className='overflow-box'>
						<div className='timeslots list'>{ this.generateDay() }</div>
					</div>
				</div>
			</div>
		);
	}
}