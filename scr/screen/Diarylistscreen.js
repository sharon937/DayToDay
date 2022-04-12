import React from 'react';
import { NativeBaseProvider ,Center, Text } from "native-base";
import Colorstheme from '../theme/Colorstheme';

const Diarylistscreen = () => {
    return (
    <NativeBaseProvider theme={Colorstheme}>
        <Center  flex={1} bg="primary.light">
            <Text fontSize={30} color="primary.100">
                This is a Diarylist Page
            </Text>              
        </Center>
    </NativeBaseProvider>
    );
}

export default Diarylistscreen;