import React from 'react';
import { SafeAreaProvider, SafeAreaView ,} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider ,useColorMode, Text, HStack, VStack } from "native-base";
import { Pressable } from 'native-base';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Todolist from '../component/Todolist';
import  Colorstheme from '../theme/Colorstheme';
import {lighttheme,darktheme} from "../theme/Modetheme"



const Todoscreen = ({route,navigation}) => {
    const{
       day,month,year
    } = route.params;
    const { colorMode } = useColorMode();

  const Mytheme = colorMode == 'light' ? lighttheme : darktheme;
    return (
    <SafeAreaProvider>
        <StatusBar/>
        <NativeBaseProvider  theme={Mytheme}>
        <Pressable position="absolute" left="6" top={"8%"}>
                            <MaterialCommunityIcons 
                            name={'chevron-left'} 
                            color={colorMode == 'light' ? '#1D2942' :'#F9FBFF'} 
                            size={45}
                            onPress={ () => {navigation.goBack();}} 
                            />
                    </Pressable> 
                <HStack  mt="10" flex={1} justifyContent="center" >                 
                    
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