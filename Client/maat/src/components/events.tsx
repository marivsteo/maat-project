import Event from "./event";
import Header from "./header";
import Heading from "./heading";
import Pagination from "./pagination";

export default function Events() {
	return (
		<div>
			<Header></Header>
			<Heading></Heading>
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
