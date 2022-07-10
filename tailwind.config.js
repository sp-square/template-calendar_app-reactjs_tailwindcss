/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	safelist: [
		'bg-indigo-500',
		'bg-gray-500',
		'bg-green-500',
		'bg-blue-500',
		'bg-red-500',
		'bg-purple-500',
		'bg-indigo-200',
		'bg-gray-200',
		'bg-green-200',
		'bg-blue-200',
		'bg-red-200',
		'bg-purple-200',
		'text-indigo-400',
		'text-gray-400',
		'text-green-400',
		'text-blue-400',
		'text-red-400',
		'text-purple-400',
	],
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
