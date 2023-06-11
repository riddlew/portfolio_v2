/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: '0.625rem',
			center: true,
		},
		extend: {
			colors: {
				theme: {
					blue: {
						50: '#dfeaf6',
						100: '#D1F5FC',
						150: '#94cfff',
						175: '#70b8f3',
						200: '#4CA2E9',
						250: '#2C83CA',
						300: '#0D64AC',
						350: '#0D47A1',
						400: '#094679',
					},
					red: {
						100: '#fbbfbf',
						200: '#ab0e0e',
					},
					yellow: {
						100: '#fafabe',
						200: '#807908',
					},
					green: {
						100: '#e4fabe',
						200: '#618008',
					},
					cyan: {
						100: '#befaf7',
						200: '#08807f',
					},
					white: '#F9FCFF',
					black: '#002442',
					section: {
						light: '#EBF6FF',
						dark: '#002d52',
					},
				},
			},
			fontFamily: {
				sans: ['Work sans', ...defaultTheme.fontFamily.sans],
				serif: ['Crete Round', ...defaultTheme.fontFamily.serif],
				quotes: ['PT Sans', ...defaultTheme.fontFamily.serif],
				code: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
					'100%': { opacity: 100 },
				},
			},
			animation: {
				fadein: 'fadein 125ms ease-in-out',
			},
		},
	},
	plugins: [],
};
