import football from "../images/abigail-keenan-8-s5QuUBtyM-unsplash.jpg";
import {
	CalendarIcon,
	UserGroupIcon,
	LocationMarkerIcon,
	UsersIcon,
	CurrencyEuroIcon,
	LightningBoltIcon,
	GlobeIcon,
	PencilIcon,
} from "@heroicons/react/solid";

export default function Event() {
	return (
		<div className="mx-3 my-3 cursor-pointer hover:scale-105 transform transition-hover duration-300 font-inter">
			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img className="w-full" src={football} alt="Mountain" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">Casual football match on turf</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						25 May 2021, 10:00 AM
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						Cluj-Napoca
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />2 Players
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<UserGroupIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						2+ Players
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<CurrencyEuroIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						Entrance contribution neccessary
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<LightningBoltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						Skill level: intermediate
					</div>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#football
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#team
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						#hard
					</span>
					<img
						className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
