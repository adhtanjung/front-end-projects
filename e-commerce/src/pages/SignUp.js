import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Input, Button } from "reactstrap";
import { signupAction } from "../redux/actions";

let loginInfo = {
	email: "",
	password: "",
	confirm: "",
};

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function SignUp(props) {
	const [login, setLogin] = useState(loginInfo);
	const handleInput = (e) => {
		setLogin({
			...login,
			[e.target.id]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		props.signupAction(login);
		// localStorage.setItem("id", props.id);
	};
	const emailCheck = useRef();

	if (props.id !== 0) {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<form className="input-field" onSubmit={handleSubmit}>
				<Input
					type="email"
					id="email"
					onChange={handleInput}
					ref={emailCheck}
					value={login.email}
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
					required
				/>

				<Input
					type="password"
					id="password"
					onChange={handleInput}
					value={login.password}
					pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
					required
				/>
				<Input
					type="password"
					id="confirm"
					onChange={handleInput}
					value={login.confirm}
					required
				/>
				<Button>Sign Up</Button>
			</form>
		</div>
	);
}
const mapStatetoProps = ({ user }) => {
	return { id: user.id };
};

export default connect(mapStatetoProps, { signupAction })(SignUp);
