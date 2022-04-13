import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Center ,useColorMode} from 'native-base';
import { useFonts, PoorStory_400Regular } from '@expo-google-fonts/poor-story';
import { Calendar } from 'react-native-calendars';
import AppLoading from 'expo-app-loading';

const MyCalendar =({navigation}) => {

  let [fontsLoaded] = useFonts({
    PoorStory_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }
  const {colorMode} = useColorMode();

  return (
    <NativeBaseProvider >
      <Center style={styles.container}>
        <Calendar
            onDayPress={day => {
              console.log('selected day', day);
              navigation.navigate('Todo', day);
            }}
           theme={{
            calendarBackground:'#F9FBFF',
            textMonthFontFamily: 'PoorStory_400Regular',
            textDayHeaderFontFamily: 'PoorStory_400Regular',
            textDayFontSize: 14,
            textMonthFontSize: 24,
            textDayHeaderFontSize: 14,
            monthTextColor: '#345680',
            dayTextColor:'#345680',
            textDayHeaderColor:'#87A0C3',
            arrowColor: '#87A0C3',
            weekVerticalMargin: 5,
            textDisabledColor:'#345679',
           }} 
          />
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'PoorStory_400Regular',
  }
});

export default MyCalendar;