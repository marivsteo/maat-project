import { useEffect, useState } from "react";
import Event from "./event";
import Header from "./header";
import Heading from "./heading";
import Pagination from "./pagination";
import { IUser } from "../interfaces/IUser";

export default function Events(props: any) {
	const [user, setUser] = useState<IUser>({ username: "", email: "", dateOfBirth: "", gender: -1 });

	let _user: IUser = props.user;
	// if (props.user.username === "") {
	// 	if (props.location.state !== "") {
	// 		_user = props.location.state;
	// 	}
	// }
	return (
		<div>
			<Heading username={props.username}></Heading>
			<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 mx-auto">
				<Event></Event>
				<Event></Event>
				<Event></Event>
				<Event></Event>
				<Event></Event>
				<Event></Event>
				<Event></Event>
			</div>
			<Pagination></Pagination>
		</div>
	);
}
