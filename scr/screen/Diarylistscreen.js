import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center,Text } from 'native-base';
import { NativeBaseProvider ,useColorMode } from 'native-base';

import Colorstheme from '../theme/Colorstheme';
import {lighttheme,darktheme} from "../theme/Modetheme"
import Diarylist from '../component/Diarylist';
import Diarydata from '../json/Diarydata.json';


const Diarylistscreen = () => {
    const { colorMode } = useColorMode();

    const Mytheme = colorMode == 'light' ? lighttheme : darktheme;
    return (
        <NativeBaseProvider theme={Mytheme}>
            <SafeAreaView>
            <Center bg="primary.light">
                <Text fontSize={30} color="primary.100" m="3">My Diary</Text>     
                <Diarylist list={Diarydata.DiaryList}></Diarylist>
            </Center> 
            </SafeAreaView>
    </NativeBaseProvider>
    );
}

export default Diarylistscreen;