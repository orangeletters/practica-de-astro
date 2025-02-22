/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:
		{
			keyframes:
			{
				'rainbow':
				{
					'0%': {color: 'red'},
					'25%': {color: 'blue'},
					'35%': {color: 'gold'},
					'45%': {color: 'lime'},
					'55%': {color: 'green'},
					'65%': {color: 'cyan'},
					'75%': {color: 'purple'},
					'85%': {color: 'pink'},
					'95%': {color: 'hotpink'},
					'100%': {color: 'red'},
				},
			},
			animation:{
				'rainbow': 'rainbow 3s linear infinite',
			}
		},
	},
	plugins: [],
};
