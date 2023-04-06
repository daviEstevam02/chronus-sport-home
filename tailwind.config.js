/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '600px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1170px',
    },
    extend: {
      colors: {
        'button-transparent': 'rgba(255,255,255,0.15)',
        current: 'currentColor',
        primary: {
          darkest: '#131740',
          dark: '#102D65',
          medium: '#164092',
          light: '#2D6DE9',
          lightest: '#748FC3',
        },
        secondary: {
          darkest: '#0C444B',
          dark: '#0F737F',
          medium: '#00E4FF',
          light: '#82EDFA',
          lightest: '#B4F5FD',
          500: '#3C99FC',
        },
        tertiary: {
          darkest: '#074E37',
          dark: '#086F4D',
          medium: '#10B981',
          light: '#25F6B1',
          lightest: '#88FFD8',
        },
        gray: {
          darkest: '#3F3F3F',
          dark: '#737373',
          medium: '#A3A3A3',
          light: '#EEEEEE',
          lightest: '#FFFFFF',
          500: '#31344C',
        },
        header: {
          primary: {
            darkest: '#0D102D',
          },
        },
        support: {
          positive: {
            darkest: '#13420F',
            dark: '#247D1B',
            medium: '#39CF2D',
            light: '#6DDB63',
            lightest: '#D8F5D5',
          },
          negative: {
            darkest: '#4F1919',
            dark: '#A22E2E',
            medium: '#CF2D2D',
            light: '#E9A0A0',
            lightest: '#FAEAEA',
          },
          warning: {
            darkest: '#43410F',
            dark: '#646111',
            medium: '#CFC92D',
            light: '#DDD769',
            lightest: '#F2F0C5',
          },
        },
      },
      container: {
        screens: {
          sm: '390px',
          md: '600px',
          lg: '768px',
          xl: '1024px',
          '2xl': '1170px',
        },
      },
    },
  },
  plugins: [],
}
