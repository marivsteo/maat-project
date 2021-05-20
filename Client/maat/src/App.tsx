import { useState, useEffect } from "react";
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
import { IUser } from "./interfaces/IUser";
import { url } from "./resources/constants";

function App() {
	const [user, setUser] = useState<IUser>({
		username: "",
		email: "",
		dateOfBirth: "",
		gender: -1,
	});

	useEffect(() => {
		(async () => {
			const response = await fetch(`${url}/auth/user`, {
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			const content = await response.json();
			setUser(content);
		})();
	});

	return (
		<div>
			<Header user={user} setUser={setUser} />
			<Switch>
				<Route path="/" exact>
					<Home user={user} />
				</Route>
				<Route path="/about" exact>
					<About user={user} />
				</Route>
				<Route path="/signup" exact>
					<Signup user={user} />
				</Route>
				<Route path="/login" exact>
					<Login user={user} setUser={setUser} />
				</Route>
				<Route path="/events" exact>
					<Events user={user} />
				</Route>
				<Route path="/profile" exact>
					<Profile user={user} />
				</Route>
				<Route path="/add_event" exact>
					<AddEvent user={user} />
				</Route>
				<Route component={Error} />
			</Switch>
		</div>
	);
}

export default App;
