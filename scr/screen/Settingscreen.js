import React from 'react';
import { NativeBaseProvider ,Center, Text ,Box} from "native-base";
import Colorstheme from '../theme/Colorstheme';

const SettingsScreen = () => {
    return (
        <NativeBaseProvider theme={Colorstheme}>
        <Center  bg="primary.light" flex={1}>
            <Text fontSize={30} color="primary.100">
                This is a setting Page
            </Text>              
        </Center>
    </NativeBaseProvider>
    );
}

export default SettingsScreen;