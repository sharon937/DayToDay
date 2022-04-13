
import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     light400: '#F9FBFF',
     gray700: '#687588',
     blue100:'#1D2942',
     pen50:'#92B4DF',
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
 };

 export default MyTheme;