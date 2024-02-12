/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-header': 'rgba(19,19,19)',
				'grey-color': 'rgba(163,163,163)',
				'border-header': '#edbd44',
			},
		},
	},
	plugins: [],
};
