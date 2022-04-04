module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
			colors: {
				'gray': '#2f2f2f',
				'derp': 'df'
			},
			screens: {
				'xs': '475px'
			}
		},
  },
  plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
}
