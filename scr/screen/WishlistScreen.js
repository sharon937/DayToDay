import React from 'react';
import { Center, Text } from "native-base";
import Colorstheme from '../theme/Colorstheme';

const Wishlistscreen = () => {
    return (
    <Center theme={Colorstheme} bg="primary.50" flex={1}>
        <Text fontSize={30}>
            This is a Wishlist Page
        </Text>              
    </Center>
    );
}

export default Wishlistscreen;