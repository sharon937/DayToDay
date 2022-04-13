import { extendTheme } from 'native-base';

export const lighttheme =extendTheme({
    colors: {
      // Add new color
      primary: {
        light: '#F9FBFF',
        100: '#1D2942',
        pen:'#92B4DF',
        gray30:'#EDEFF2',
        line10:'#CED4DF',
        haha:'687588'
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
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

export const darktheme =extendTheme({
    colors: {
      // Add new color
      primary: {
        light: '#1D2942',
        100: '#F9FBFF',
        pen:'#92B4DF',
        gray30:'#252D3F',
        line10:'#CED4DF',
        haha:'687588',
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
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