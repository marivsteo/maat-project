import { ISportEvent } from "../interfaces/ISportEvent";

export default function EventPage(props: { sportEvent: ISportEvent | null }) {
	return (
		<div>
			<div className="lg:flex lg:items-center lg:justify-between font-inter mt-10 mx-10">
				<div className="flex-1 min-w-0">
					<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
						{props.sportEvent?.name}
					</h2>
				</div>
			</div>
		</div>
	);
}
