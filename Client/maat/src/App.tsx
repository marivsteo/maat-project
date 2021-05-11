import React from "react";
import "./App.css";
import bg from "./images/composition-1.svg";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const navigation = [
	{ name: "Events", href: "#" },
	{ name: "Profile", href: "#" },
	{ name: "About", href: "#" },
	{ name: "Sign up", href: "#" },
];

function App() {
	return (
		<div className="relative bg-white overflow-hidden font-inter">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<Popover>
						{({ open }) => (
							<>
								<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
									<nav
										className="relative flex items-center justify-between sm:h-10 lg:justify-start"
										aria-label="Global"
									>
										<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
											<div className="flex items-center justify-between w-full md:w-auto">
												<a href="#">
													<div className="flex items-center flex-no-shrink text-white mr-6">
														<svg
															className="h-8 w-8 mr-2"
															width="54"
															height="54"
															viewBox="0 0 54 54"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle cx="27" cy="27" r="20" fill="#fa255e" />{" "}
														</svg>
														<span className="font-bold text-xl tracking-tight text-black">
															Ma'at
														</span>
													</div>
												</a>
												<div className="-mr-2 flex items-center md:hidden">
													<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">Open main menu</span>
														<MenuIcon className="h-6 w-6" aria-hidden="true" />
													</Popover.Button>
												</div>
											</div>
										</div>
										<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="font-medium text-gray-500 hover:text-gray-900"
												>
													{item.name}
												</a>
											))}
											<a
												href="#"
												className="font-medium text-primary hover:text-secondary transition-hover duration-500"
											>
												Log in
											</a>
										</div>
									</nav>
								</div>

								<Transition
									show={open}
									as={Fragment}
									enter="duration-150 ease-out"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="duration-100 ease-in"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Popover.Panel
										focus
										static
										className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
									>
										<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
											<div className="px-5 pt-4 flex items-center justify-between">
												<div className="flex items-center flex-no-shrink text-white mr-6">
													<svg
														className="h-8 w-8 mr-2"
														width="54"
														height="54"
														viewBox="0 0 54 54"
														xmlns="http://www.w3.org/2000/svg"
													>
														<circle cx="27" cy="27" r="20" fill="#fa255e" />{" "}
													</svg>
													<span className="font-bold text-xl tracking-tight text-black">
														Ma'at
													</span>
												</div>
												<div className="-mr-2">
													<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
														<span className="sr-only">Close main menu</span>
														<XIcon className="h-6 w-6" aria-hidden="true" />
													</Popover.Button>
												</div>
											</div>
											<div className="px-2 pt-2 pb-3 space-y-1">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</a>
												))}
											</div>
											<a
												href="#"
												className="block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100"
											>
												Log in
											</a>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>

					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline body">Find your perfect </span>
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary xl:inline">
									sports partner
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								If working out just sounds more fun with someone else, you're in luck! And you don't
								even have to convince your friends to join you, we'll help you find a partner.
							</p>

							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Need another player four your football match? Or need someone to play tennis with,
								instead of your cousin who doesn't know how to play? Browse our selection of events and
								start playing!
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary md:py-4 md:text-lg md:px-10 transition-hover duration-500"
									>
										Get started
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-500"
									>
										Learn more
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={bg} alt="" />
			</div>
		</div>
	);
}

export default App;
