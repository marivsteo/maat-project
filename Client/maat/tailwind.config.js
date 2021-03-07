// const colors = require("tailwindcss/colors");

module.exports = {
	purge: [".src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ["Inter"],
			},
			backgroundImage: (theme) => ({
				"home-page": "url('/src/images/abigail-keenan-8-s5QuUBtyM-unsplash.jpg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
