import React from 'react';
import {Box, Pressable, Actionsheet, useDisclose, NativeBaseProvider ,Button,Center,Text, useColorMode } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colorstheme from '../theme/Colorstheme';
import {lighttheme,darktheme} from "../theme/Modetheme"


const ActionButton = () => {
    const { colorMode } = useColorMode();

    const Mytheme = colorMode == 'light' ? lighttheme : darktheme;
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      return (
        <NativeBaseProvider theme={Mytheme}>
            <Center>
                <Pressable 
                  onPress={onOpen}                
                  width={60} height={60} 
                  justifyContent="center" alignItems="center" marginBottom={20}
                  borderRadius={40}
                  bg="primary.pen" 
                  >
                    <Box bg='primary.pen'>
                        <SimpleLineIcons name="pencil" size={30} color={'#F9FBFF'} />
                    </Box>
                </Pressable>
                <Actionsheet isOpen={isOpen} onClose={onClose} >
                    <Actionsheet.Content  bg="primary.gray30" >
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="4" mt="10"><Text color="primary.100">Keep a diary</Text></Actionsheet.Item>
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="4" mt="8"><Text color="primary.100">Wishlist</Text></Actionsheet.Item>
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="4" mt="8" mb="8"><Text color="primary.100">To Do List</Text></Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>
            </Center>
        </NativeBaseProvider>
        );
        
}

export default ActionButton;

