import { NativeBaseProvider , Box ,useColorMode } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyCalendar from "../component/MyCalendar";
import Colorstheme from "../theme/Colorstheme";
import {lighttheme,darktheme} from "../theme/Modetheme"


const Calenscreen =({ navigation })=>{

    const { colorMode } = useColorMode();

   const Mytheme = colorMode == 'light' ? lighttheme : darktheme;
   
    return(
        <SafeAreaProvider >
            <NativeBaseProvider theme={Mytheme}>
                <Box style={{flex:1}} 
                    _dark={{ bg: "primary.100" }}
                    _light={{ bg: "primary.light" }}>
                <MyCalendar navigation={navigation}/>
                </Box>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};



export default Calenscreen;