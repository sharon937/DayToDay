import React from 'react';
import { NativeBaseProvider ,HStack,Box,Center, Text ,useColorMode, Switch} from "native-base";
import Colorstheme from '../theme/Colorstheme';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
    const { colorMode, toggleColorMode } = useColorMode();

   return (
    <Box
        flex={1}
        _dark={{ bg: "#1D2942" }}
        _light={{ bg: "#F9FBFF" }}
    >
            <Center
            shadow={2} width="50%"
            mt="40" px="2" py="4"
            _dark={{ bg: "gray.800"}}
            _light={{ bg: "white" }}
            borderRadius="md"
            alignSelf="center"
            >
                <HStack space={8} alignItems="center" >
                    <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
                    <Switch
                        name="light Mode"
                        isChecked={colorMode === "light"}
                        onToggle={toggleColorMode}
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                    />
                </HStack>
            </Center>
    </Box>

);
      
   
}

export default SettingsScreen;