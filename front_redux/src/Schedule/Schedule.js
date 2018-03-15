import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuickBuild from '../QuickBuild';

import CalNav from './CalNav';
import Calendar from './Calendar';

import './Schedule.css';

export default class Schedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'week': [
				{
					'date': '30',
					'day': 'TUES',
					'month': 'October',
					'appointments': null,
				},{
					'date': '31',
					'day': 'WEDS',
					'month': 'October',
					'appointments': null,
				},{
				
					'date': '01',
					'day': 'THURS',
					'month': 'November',
					'appointments': null,
				},{
				
					'date': '02',
					'day': 'FRI',
					'month': 'November',
					'appointments': null,
				},{
				
					'date': '03',
					'day': 'SAT',
					'month': 'November',
					'appointments': null,
				},{
				
					'date': '04',
					'day': 'SUN',
					'month': 'November',
					'appointments': null,
				},{
				
					'date': '05',
					'day': 'MON',
					'month': 'November',
					'appointments': null,
				},{
				
					'date': '06',
					'day': 'TUES',
					'month': 'November',
					'appointments': null,
				},
			],
			'day': null,
		}

		this.update = this.update.bind(this);
	}

	getDay = (query) => {
		const day = this.state.day 
			? this.state.day
			: this.state.week[0];

		const date = day.date;

		return query == 'day'
			? day
			: query == 'date'
			? date
			: null;
	}

	update(e) {
		const id = e.target.parentElement.id;
		const day = this.state.week[id];
		this.setState({'day': day});
	}

	clearMask = () => {
		this.props.toggleMapMask(true);
	}

	componentWillMount() {
		this.props.mapClickable
		? this.props.toggleMapMask(false)
		: null;
	}

	render() {

		const title = () => {
			const page = this.props.match.params.sub;
			const type = this.props.user.type;
			const driverNav = () => {
				return page == 'offers' ? 'Edit Availability' :
					page == 'requests' ? 'Offer Rides' :
					'My Schedule';
				}

			const voterNav = () => {
				return page == 'offers' ? 'Request a Ride' : 
					page == 'requests' ? 'Edit My Request Windows' :
					'My Schedule';
				}
			
			return type == 'driver' ? driverNav() : 
				type == 'voter' ? voterNav() :
				null;
		}

		const day = (val) => {
			return this.getDay(val)
		}

		return (
			<div className='modal calendar'>
				<div className='overflow-box'>
					<Link to='/' className='close-button' onClick={ this.clearMask }/>
					<h2>{ title() }</h2>
					<CalNav 
						update = { this.update } 
						week = { this.state.week }
						date = { day('date') }
					/>
				</div>
				<Calendar 
					day = { day('day') }
				/>
			</div>
		);
	}
}