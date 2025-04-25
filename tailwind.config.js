export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#222222',
      'soft-black': '#353535',
      'pure-black':'#000000',
      gray: '#d6d6d6',
      'soft-gray': '#ececec',
      'softer-gray': '#f5f5f5',
      'header-gray': ' #f0f0f0',
      'header-black': '#2d2d2d',
      'dark-black': '#131313',
      'darker-black': '#0a0a0a',
      'softer-black': '#606060',
      'text-gray':'#919191',
      'panel-gray':'#e1e0e0',
      white: '#ffffff',
      'fade-white': '#dddddd',
      red: '#b30000',
      'red-card':'#ca3341',
      orange: '#e66957',
      'orange-hover': '#f07b6e',
      green: '#324e4f',
      'green-hover': '#5c8182',
      'soft-green': '#227f84',
      'softer-green': '27a0a7e3',
      'green-card':'#49c968',
      blue: '#2380d7',
      'blue-card':'#2e73a1',
      'light-blue':'#d3e4f9',
      'text-blue':'#0740df',
      'darker-blue':'#1b68e6',
      'lighter-blue':'#79b4f5',
      yellow: '#FFFF00',
      pieChartGrey: '#f5f5f5'
    }
  },
  plugins: []
}
