import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Error from "./components/error";
import About from "./components/about";
import Header from "./components/header";
import Login from "./components/login";
import Signup from "./components/signup";
import Events from "./components/events";
import Profile from "./components/profile";
import AddEvent from "./components/addEvent";

function App() {
	return (
		<main>
			<div>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} exact />
					<Route path="/signup" component={Signup} exact />
					<Route path="/login" component={Login} exact />
					<Route path="/events" component={Events} exact />
					<Route path="/profile" component={Profile} exact />
					<Route path="/add_event" component={AddEvent} exact />
					<Route component={Error} />
				</Switch>
			</div>
		</main>
	);
}

export default App;
