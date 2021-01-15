import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";

function App() {
	return (
		<div>
			<Header />
			<Route path="/" exact component={Home} />
			<Route path="/contact-me" component={ContactMe} />
		</div>
	);
}

export default App;
