/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				lightBlue: '#50c2f0',
				darkBlue: '#2578b8',
				fuchsia: '#e51888',
			},
			fontFamily: {
				sans: ['Open Sans'],
			},
			gridTemplateColumns: {
				'1/5': '1fr 5fr',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
