import { NativeBaseProvider , Box, extendTheme } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyCalendar from "../component/MyCalendar";
import Colorstheme from "../theme/Colorstheme";


const Calenscreen =({ navigation })=>{
    return(
        <SafeAreaProvider >
            <NativeBaseProvider theme={Colorstheme}>
                <Box style={{flex:1}} bg="primary.light" >
                <MyCalendar navigation={navigation}/>
                </Box>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};



export default Calenscreen;