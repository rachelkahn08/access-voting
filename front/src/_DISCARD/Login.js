import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'username': '',
			'password': '',
			'user': {},
		}

		this.sendLogin = this.sendLogin.bind(this);
		this.update = this.props.update;
		this.updateUser = this.updateUser.bind(this);
	}

	inputChange = event => {
		this.setState({[event.target.name]: event.target.value});
	}

	sendLogin(e) {
		e.preventDefault();

		return new Promise((resolve, reject) => {
			this.updateUser('Buddy', 'driver');
		}).then(
			this.props.update('login', this.state.user)
		)
	}

	updateUser(name, type) {
		this.state.user.name = name;
		this.state.user.type = type;
	}

	render() {
		return (
			<div className='modal login'>
				<form className='login-form'>
					<h2>Log In</h2>
					<input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.inputChange.bind(this)}/>
					<input type='text' name='password' value={this.state.password} placeholder='Password' onChange={this.inputChange.bind(this)}/>
					<button onClick={this.sendLogin}>Submit</button>
				</form>
			</div>
		)
	}
}