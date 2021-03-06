module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '0px',
      // => @media (min-width: 600px) { ... }

      md: '600px',
      // => @media (min-width: 600px) { ... }

      lg: '1920px',
      // => @media (min-width: 1200px) { ... }
    },
    colors: {
      'cv-color': {
        magenta: {
          1: '#EE01FF',
          2: '#F562F7',
          3: '#E7A0E8',
        },
        cian: {
          1: '#01FFEE',
          2: '#63F7F0',
          3: '#97EDE9',
        },
        yellow: {
          1: '#FFEE01',
          2: '#F5E95F',
          3: '#E8DE9C',
        },
        black: {
          1: '#242828',
          2: '#373D3D',
          3: '#4B5454',
        },
        gray: {
          1: '#A6A4AA',
          2: '#C2C0C6',
          3: '#D7D6DA',
        },
      },
    },
    extend: {
      spacing: {
        'cv-n-20':'-20px',
        'cv-1': '1px',
        'cv-2': '2px',
        'cv-5': '5px',
        'cv-18': '18px',
        'cv-22': '22px',
        'cv-26': '26px',
        'cv-35': '35px',
        'cv-38': '38px',
        'cv-44': '44px',
        'cv-50': '50px',
        'cv-60': '60px',
        'cv-70': '70px',
        'cv-78': '78px',
        'cv-90': '90px',
        'cv-100': '100px',
        'cv-300': '300px',
        'cv-334': '334px',
        'cv-350': '350px',
        'cv-360': '360px',
        'cv-380': '380px',
        'cv-400': '400px',
        'cv-250': '250px',
        'cv-500': '500px',
        'cv-484': '484px',
        'cv-540': '540px',
        'cv-870': '870px',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans'],
    },
    fontSize: {
      'sm': '19px',
      'base': '24px',
      'lg': '36px',
      'icon-size': '50px',
      'stars-size':'20px',
    }
  },
  plugins: [],
};
