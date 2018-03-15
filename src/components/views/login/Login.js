import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: ""
		};
		this.updateLogin = this.updateLogin.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}
	updateLogin(e) {
		this.setState({ login: e.target.value });
	}
	updatePassword(e) {
		this.setState({ password: e.target.value });
	}
	render() {
		return (
			<div>
				<Form style={{ paddingTop: 50 }}>
					<Input
						onChange={this.updateLogin}
						value={this.state.login}
						placeholder="Login"
					/>
					<Input
						onChange={this.updatePassword}
						value={this.state.password}
						placeholder="Password"
					/>
					<Button
						type="submit"
						onClick={() =>
							this.props.login(
								this.state.login,
								this.state.password
							)
						}
					>
						Click Here
					</Button>
				</Form>
				{this.props.loginMessage}
			</div>
		);
	}
}

export default Login;
