import React from 'react';
import {extendTheme } from 'native-base';


const Colorstheme = extendTheme({
    colors: {
      // Add new color
      primary: {
        light: '#F9FBFF',
        100: '#1D2942',
        pen:'#92B4DF',
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
    fontConfig:{
      poorstory:{
        100:{
          normal:'PoorStory_400Regular',
        },
      },
    },
    fonts:{
      heading: 'PoorStory_400Regular',
      body: 'PoorStory_400Regular',
      mono: 'PoorStory_400Regular',
    },
});

export default Colorstheme ;