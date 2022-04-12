import React from 'react';
import { Center, Text } from "native-base";
import Colorstheme from '../theme/Colorstheme';

const Todoscreen = () => {
    return (
    <Center theme={Colorstheme} bg="primary.50" flex={1}>
        <Text fontSize={30} bg="primary.50">
            This is a Todo Page
        </Text>              
    </Center>
    );
}

export default Todoscreen;