/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				largedesktop: { min: '1920px', max: '2560px' },
				'largedesktop-up': { min: '2560px' },
				'xldesktop-up': { min: '2401px' },
				'xxl-up': { min: '1600px' },
				'xxl-down': { max: '1600px' },
				desktop: { min: '1281px', max: '1600px' },
				desktopmid: { min: '1201px', max: '1400px' },
				desktopMidUp: {min: '1401px', max: '1500px'},
				desktopmidDown: { min: '1501px', max: '1599px' },
				xl: { max: '1280px' },
				'xl-up': { min: '1281px' },

				xm: {max: '1200px' },
				'xm-up': {min: '1200px'},

				ipad: { max: '1024px' },
				//short height
				'laptop-landscape': {
					raw: '(min-width: 1200px) and (max-height: 950px)',
				},
				laptopmid: { min: '1281px', max: '1366px' },
				laptop: { min: '992px', max: '1280px' },
				laptopsmall: { min: '992px', max: '1200px' },
				lg: { max: '991px' },
				'lg-up': { min: '992px' },

				tablet: { min: '768px', max: '991px' },
				md: { max: '767px' },
				'md-up': { min: '768px' },

				phablet: { min: '596px', max: '767px' },
				sm: { max: '595px' },
				'sm-up': { min: '596px' },

				phone: { min: '376px', max: '595px' },
				xs: { max: '375px' },
				'xs-up': { min: '376px' },

				xxs: { max: '359px' },
			},
			width: {
				mainRow: 'calc(100% + 20px)',
				colThreeWrapper: 'calc(100% + 3rem)',
				colTwoWrapper: 'calc(100% + 2rem)',
				threeCard: 'calc(33.33% - 20px)',
				colFivewidth: 'calc(20% - 10rem)',
				colThree: 'calc(33.33% - 3rem)',
				halfWidth: 'calc(50% - 20px)',
				colTwo: 'calc(50% - 2rem)',
				colTwohalfwidth: 'calc(50% - 1.5rem)',
				onebyfour: 'calc(25% - 3rem)',
				halfwidthseven: 'calc(50% - 15rem)',
				absfullwidth: 'calc(100% + 9.1rem)',
				staticshalfwidth: 'calc(50% - 7.5rem)',
				staticsfullwidth: 'calc(100% + 7.5rem)'
			},
			colors: {
				black: '#000',
				white: '#FFF',
				pink: '#FA198C',
				gray: '#E5E4E7',
				darkGray: '#989898',
				darkblue: '#064B65',
				blue: '#376BC3',
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
		},
	},
  plugins: [],
};
