import { useEffect, useState } from "react";
import Event from "./event";
import Header from "./header";
import Heading from "./heading";
import Pagination from "./pagination";
import { IUser } from "../interfaces/IUser";
import { ISportEvent } from "../interfaces/ISportEvent";
import { url } from "../resources/constants";
import { Link } from "react-router-dom";

export default function Events(props: any) {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${url}/sportevent`, {
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			const content = await response.json();
			setEvents(content);
		})();
	}, []);

	return (
		<div>
			<Heading username={props.username}></Heading>
			<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 mx-auto">
				{events.map((event: ISportEvent) => {
					return (
						<Link to={`/event/${event.id}`} key={event.name}>
							<Event sportEvent={event}></Event>
						</Link>
					);
				})}
			</div>
			{/* <Pagination></Pagination> */}
		</div>
	);
}
