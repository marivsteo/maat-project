import { useState } from "react";
import { IUser } from "../interfaces/IUser";
import Header from "./header";

export default function Profile(props: any) {
	const [user, setUser] = useState<IUser>({ username: "", email: "", dateOfBirth: "", gender: -1 });

	return (
		<div className="font-inter">
			<Header user={props.user} setUser={setUser}></Header>
		</div>
	);
}
