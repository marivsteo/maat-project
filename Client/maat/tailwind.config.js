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
			colors: {
				primary: "#fa255e",
				secondary: "#c39ea0",
				third: "#f8e5e5",
				fourth: "#000000",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss-font-inter")()],
};
