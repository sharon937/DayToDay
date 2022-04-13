import React from 'react';
import {Box, Pressable, Actionsheet, useDisclose, NativeBaseProvider ,Button,Center,Text, Flex} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colorstheme from '../theme/Colorstheme';


const ActionButton = () => {

    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      return (
        <NativeBaseProvider theme={Colorstheme}>
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
                <Actionsheet isOpen={isOpen} onClose={onClose}  >
                    <Actionsheet.Content bg="primary.light">
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="1" mt="10"><Text color="primary.100">Keep a diary</Text></Actionsheet.Item>
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="1" mt="5"><Text color="primary.100">Wishlist</Text></Actionsheet.Item>
                    <Actionsheet.Item alignItems="center" bg="primary.light" borderRadius={30} shadow="1" mt="5" mb="8"><Text color="primary.100">To Do List</Text></Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>
            </Center>
        </NativeBaseProvider>
        );
        
}

export default ActionButton;

