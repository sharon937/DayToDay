import React from 'react';
import { SafeAreaProvider ,} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider ,Center, Text, HStack } from "native-base";
import { Pressable } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colorstheme from '../theme/Colorstheme';

const Todoscreen = ({route,navigation}) => {
    const{
       day,month,year
    } = route.params;
    return (
    <SafeAreaProvider>
        <StatusBar/>
        <NativeBaseProvider  theme={Colorstheme}>
                <Center mt='10'>
                    <Text fontSize={30}  color="primary.100">
                        {year}/{month}/{day}
                    </Text> 
                    <Pressable>
                            <MaterialCommunityIcons 
                            name={'chevron-left'} 
                            color={'black'} 
                            size={25}
                            onPress={ () => {navigation.goBack();}} 
                        />
                        </Pressable>        
                </Center>

        </NativeBaseProvider>
    </SafeAreaProvider>
    );
}

export default Todoscreen;