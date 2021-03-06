module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#E21616',
       blue: '#000166',
        black: '#1F1F1F',
        gray: '#1F1F1F',
        green: '#33C759',
        graydark: '#2D2D2D',
        bluedark: '#000166',
        gray60: '#bdbdbd'
      },
      fontSize: {
       'tiny': '.600rem',
      },
      fontFamily: {
          inter: ['Inter', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
