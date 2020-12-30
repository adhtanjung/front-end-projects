import React from "react";
import { Input, Button } from "reactstrap";

function Login() {
	return (
		<div>
			<div className="input-field">
				<Input type="email" />
				<Input type="password" />
				<Button>login</Button>
			</div>
		</div>
	);
}

export default Login;
