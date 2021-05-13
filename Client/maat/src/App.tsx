import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Error from "./error";
import About from "./about";
import Header from "./header";

function App() {
	return (
		<main>
			<Header></Header>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				{/* <Route path="/signup" component={SignUp} exact /> */}
				{/* <Route path="/login" component={Login} exact /> */}
				{/* <Route path="/events" component={Events} exact /> */}
				{/* <Route path="/profile" component={Profile} exact /> */}
				<Route component={Error} />
			</Switch>
		</main>
	);
}

export default App;
