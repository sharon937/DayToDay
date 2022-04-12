import React from 'react';
import {extendTheme } from 'native-base';


const Colorstheme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#F9FBFF',
        100: '#1D2942',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
});

export default Colorstheme ;