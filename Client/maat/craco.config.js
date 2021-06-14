module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: "/api",
		}),
	},
};
