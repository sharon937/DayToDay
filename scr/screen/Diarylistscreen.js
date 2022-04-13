import React from 'react';
import { SafeAreaView,  } from 'react-native-safe-area-context';
import { Center,Text } from 'native-base';
import { NativeBaseProvider } from 'native-base';

import Colorstheme from '../theme/Colorstheme';
import Diarylist from '../component/Diarylist';
import Diarydata from '../json/Diarydata.json';

const Diarylistscreen = () => {
    return (
        <NativeBaseProvider theme={Colorstheme}>
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