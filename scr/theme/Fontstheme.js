import {extendTheme} from 'native-base';

const Fontstheme = extendTheme({
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

  export default Fontstheme;