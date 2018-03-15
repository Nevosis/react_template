import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../views/login/Login";
import { loginUser } from "../../actions/loginActions";
import store from "../../store";
import { withRouter } from 'react-router'

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this)
	}
	login(login, password) {
		store.dispatch(loginUser(login, password)).then((suc) => {
			this.props.history.push("/haha");
		}).catch((e) => {
			console.warn(e)
		});
	}

	render() {
		let loginMessage = "Deconnecté";
		if (this.props.logged)
			loginMessage = "Connecté";
		
		return <Login loginMessage={loginMessage} login={this.login} />;
	}
}

const mapStateToProps = function(store) {
	return {logged: store.loginState.logged};
};

export default withRouter(connect(mapStateToProps)(LoginContainer));
