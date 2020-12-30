import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { keepLoginAction } from "./redux/actions";

function App(props) {
	useEffect(() => {
		const id = localStorage.getItem("id");
		props.keepLoginAction(id);
	}, [props]);
	return (
		<div className="appjs">
			<Header />
			<Route path="/" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={SignUp} />
		</div>
	);
}

export default connect(null, { keepLoginAction })(App);
