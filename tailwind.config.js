/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				White: 'hsl(0, 0%, 100%)',
				LightPink: 'hsl(275, 100%, 97%)',
				GrayishPurple: 'hsl(292, 16%, 49%)',
				DarkPurple: 'hsl(292, 42%, 14%)',
				Pink: '#AD28EB',
			},
			keyframes: {
				slide: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
				show: {
					'0%': { opacity: '0', transform: 'translateY(100px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				slide: 'slide 1s cubic-bezier(.24,.26,1,-0.07) forwards',
				show: 'show 1s 1s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
