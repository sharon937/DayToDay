import React from 'react';
import { SafeAreaProvider, SafeAreaView ,} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider ,Center, Text, HStack, VStack } from "native-base";
import { Pressable } from 'native-base';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Todolist from '../component/Todolist';
import  Colorstheme from '../theme/Colorstheme';

const Todoscreen = ({route,navigation}) => {
    const{
       day,month,year
    } = route.params;
    return (
    <SafeAreaProvider>
        <StatusBar/>
        <NativeBaseProvider  theme={Colorstheme}>
        <Pressable position="absolute" left="6" top={"8%"}>
                            <MaterialCommunityIcons 
                            name={'chevron-left'} 
                            color={'black'} 
                            size={45}
                            onPress={ () => {navigation.goBack();}} 
                            />
                    </Pressable> 
                <HStack  mt="10" flex={1} bg="primary.600" justifyContent="center" >                 
                    
                    <Text fontSize={30}  color="primary.100" mt="5" position="absolute" left={"1/3"} top="0.5" >
                        {year}/{month}/{day}
                    </Text> 
                    
                </HStack > 
                <Todolist/>
        </NativeBaseProvider> 
          
           
    </SafeAreaProvider>
    
    );
}

export default Todoscreen;