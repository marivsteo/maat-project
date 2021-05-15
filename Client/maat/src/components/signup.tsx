import { LockClosedIcon } from "@heroicons/react/solid";
import Header from "./header";
import { Link, NavLink } from "react-router-dom";

export default function Signup() {
	return (
		<div className="min-h-screen mb-20">
			<Header></Header>
			<div className="font-inter mt-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<svg
							className="mx-auto h-12 w-auto"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="27" cy="27" r="20" fill="#fa255e" />{" "}
						</svg>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign up for free to start moving
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Or{" "}
							<NavLink to="/login" className="font-medium text-secondary-500 hover:text-secondary-400">
								log in with your existing account
							</NavLink>
						</p>
					</div>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md">
							<div className="mb-4">
								<label htmlFor="email-address">What's your email?</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Enter your email."
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									You need to enter your email.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="email-address">Confirm your email</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Enter your email again."
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									The email addresses don't match.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="password">Create a password</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Create a password."
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									You need to enter a password.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="profile-name" className="mb-4">
									What should other users call you?
								</label>
								<input
									id="profile-name"
									name="profileName"
									type="email"
									required
									className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Enter a username."
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									Enter a username.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="birthday">What's your birth date?</label>
								<input
									id="birthday"
									name="birthday"
									type="date"
									required
									className="mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Enter a username."
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									Enter a valid date of birth.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="gender">What's your gender?</label>
								<div className="flex-row mt-2">
									<input
										id="gender"
										name="gender"
										type="radio"
										required
										className="mr-2 appearance-none rounded-full relative border border-gray-300 placeholder-gray-500 text-primary focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									/>
									<label htmlFor="gender">Male</label>
									<input
										id="gender"
										name="gender"
										type="radio"
										required
										className="mr-2 ml-4 appearance-none rounded-full relative border border-gray-300 placeholder-gray-500 text-primary focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									/>
									<label htmlFor="gender">Female</label>
								</div>
								<span className="text-xs text-red-600" id="passwordHelp">
									Select your gender.
								</span>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="text-base shadow group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-hover duration-500"
							>
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<LockClosedIcon
										className="h-5 w-5 text-white group-hover:text-primary transition-hover duration-500"
										aria-hidden="true"
									/>
								</span>
								Create account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
