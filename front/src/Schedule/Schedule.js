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
			'day': {}
		}

		this.update = this.update.bind(this);
	}

	componentWillMount() {
		this.setState({'day': this.state.week[0]});
	}

	componentWillMount() {
		return this.props.maskMap(false);
	}

	update(e) {
		const id = e.target.parentElement.id;
		const day = this.state.week[id];
		this.setState({'day': day});
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

		return (
			<div className='modal calendar'>
				<div className='overflow-box'>
					<Link to='/' className='close-button'/>
					<h2>{ title() }</h2>
					<CalNav 
							update = { this.update } 
							week = { this.state.week }
							date = { this.state.day.date }
					/>
				</div>
				<Calendar 
					day = { this.state.day }
				/>
			</div>
		);
	}
}