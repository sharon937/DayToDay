import React from 'react';
import { NativeBaseProvider ,Center, Text } from "native-base";
import Colorstheme from '../theme/Colorstheme';

const Wishlistscreen = () => {
    return (
    <NativeBaseProvider theme={Colorstheme}>
        <Center  bg="primary.light" flex={1}>
            <Text fontSize={30} color="primary.100">
                This is a Wishlist Page
            </Text>              
        </Center>
    </NativeBaseProvider>
    );
}

export default Wishlistscreen;