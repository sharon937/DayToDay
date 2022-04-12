import React from 'react';
import { NativeBaseProvider ,Center, Text } from "native-base";

import Colorstheme from '../theme/Colorstheme';

const Todoscreen = ({route}) => {
    const{
        dateString,
    } = route.params;
    return (
    <Center theme={Colorstheme} flex={1}>
        <Text fontSize={30}  style={{fontFamily:'PoorStory_400Regular'}}>
            This is a Todo Page {dateString}
        </Text>              
    </Center>
    );
}

export default Todoscreen;