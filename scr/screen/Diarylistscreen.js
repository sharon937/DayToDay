import React from 'react';
import { Center, Text } from "native-base";
import Colorstheme from '../theme/Colorstheme';

const Diarylistscreen = () => {
    return (
    <Center theme={Colorstheme} bg="primary.50" flex={1}>
        <Text fontSize={30} bg="primary.50">
            This is a Diarylist Page
        </Text>              
    </Center>
    );
}

export default Diarylistscreen;