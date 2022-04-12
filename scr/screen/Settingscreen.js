import React from 'react';
import { Center, Text ,Box} from "native-base";
import Colorstheme from '../theme/Colorstheme';

const SettingsScreen = () => {
    return (
    <Center theme={Colorstheme} flex={1}>
        <Box  bg="primary.50">
        <Text fontSize={30}>
            This is a Setting Page
        </Text>    
        </Box>          
    </Center>
    );
}

export default SettingsScreen;