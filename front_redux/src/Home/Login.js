import React, { Component } from 'react';
import './_Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'username': '',
			'password': '',
		}

		this.sendLogin = this.sendLogin.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	inputChange = event => {
		this.setState({[event.target.name]: event.target.value});
	}

	sendLogin(e) {
		e.preventDefault();
		const user = this.updateUser('Buddy', 'driver');
		this.props.update('homepage', 'login', user);
	}

	updateUser(name, type) {
		let user = Object.assign({}, this.state.user)
			user.name = name;
			user.type = type;
		return user;
	}

	render() {
		return (
			<div className='modal login'>
				<form className='login-form'>
					<h2>Log In</h2>
					<input type='text' 
						name='username' 
						value={this.state.username} 
						placeholder='Username' 
						onChange={this.inputChange.bind(this)}
					/>
					<input type='text' 
						name='password' 
						value={this.state.password} 
						placeholder='Password' 
						onChange={this.inputChange.bind(this)}
					/>
					<button onClick={this.sendLogin}>Submit</button>
				</form>
			</div>
		)
	}
}