import Header from "./header";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
	return (
		<div className="min-h-screen mb-20">
			<Header></Header>
			<div className="bg-white text-center py-4 lg:px-4">
				<div
					className="p-2 bg-red-500 items-center text-white leading-none lg:rounded-full flex lg:inline-flex"
					role="alert"
				>
					<span className="flex rounded-full bg-red-200 uppercase px-2 py-1 text-xs font-bold mr-3 text-black">
						Error
					</span>
					<span className="font-semibold mr-2 text-left flex-auto">Incorrect email or password</span>
				</div>
			</div>
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
							To continue, log in to Ma'at.
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Don't have an account?{" "}
							<NavLink to="/signup" className="font-medium text-secondary-500 hover:text-secondary-400">
								Sign up for Ma'at.
							</NavLink>
						</p>
					</div>
					<form className="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md">
							<div className="mb-4">
								<label htmlFor="email-address">Email address</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									Please enter your email address.
								</span>
							</div>
							<div className="mb-4">
								<label htmlFor="password">Password</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-secondary-400 focus:border-secondary-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
								<span className="text-xs text-red-600" id="passwordHelp">
									Please enter your password.
								</span>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="text-base shadow group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-hover duration-500"
							>
								Log in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
