import { useState } from "react";
import { IUser } from "../interfaces/IUser";
import Header from "./header";

export default function AddEvent() {
	return (
		<div>
			<div className="mt-10 font-inter mx-10">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Your event information</h3>
							<p className="mt-1 text-sm text-gray-600">
								Please enter all the details about your event and don't forget to check twice.
							</p>
							<img
								className="w-full md:block lg:block sm:hidden "
								src={`/images/Open Doodles - FLoating.png`}
							></img>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form action="#" method="POST">
							<div className="shadow overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 bg-white sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="first_name"
												className="block text-sm font-medium text-gray-700"
											>
												What is the name of your event?
											</label>
											<input
												type="text"
												name="first_name"
												id="first_name"
												autoComplete="given-name"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last_name"
												className="block text-sm font-medium text-gray-700"
											>
												When does the event start?
											</label>
											<input
												id="birthday"
												name="birthday"
												type="datetime-local"
												max={Date.now.toString()}
												required
												className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
												placeholder="Enter a username."
											/>
										</div>

										<div className="col-span-6 sm:col-span-4">
											<label
												htmlFor="email_address"
												className="block text-sm font-medium text-gray-700"
											>
												Where does it take place?
											</label>
											<input
												type="text"
												name="email_address"
												id="email_address"
												autoComplete="email"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												How many people are already attending?
											</label>
											<input
												type="number"
												name="email_address"
												id="email_address"
												autoComplete="email"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												How many people are already attending?
											</label>
											<input
												type="number"
												name="email_address"
												id="email_address"
												autoComplete="email"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-2">
											<label htmlFor="city" className="block text-sm font-medium text-gray-700">
												City
											</label>
											<input
												type="text"
												name="city"
												id="city"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label htmlFor="state" className="block text-sm font-medium text-gray-700">
												State / Province
											</label>
											<input
												type="text"
												name="state"
												id="state"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal_code"
												className="block text-sm font-medium text-gray-700"
											>
												ZIP / Postal
											</label>
											<input
												type="text"
												name="postal_code"
												id="postal_code"
												autoComplete="postal-code"
												className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-hover duration-500"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
