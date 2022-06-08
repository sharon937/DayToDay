import React from "react";
import { NativeBaseProvider, Box, Text, Center } from "native-base";
import { HStack, VStack } from "native-base";
import Colorstheme from "../theme/Colorstheme";
import { Image, StyleSheet } from "react-native";


const Diarydetail = props => {
    let {album} = props;
    return(
        <NativeBaseProvider theme={Colorstheme}>
            <Center width={343} height={135} m="2" bg="primary.gray30" borderRadius="10" shadow="4">
            <HStack>
                <VStack alignItems="center" borderStyle="solid" borderRightWidth="2" borderColor={"primary.line10"} mr="4"  pr="5">
                    <Text color={"primary.100"} fontSize="64">{album.date}</Text>
                    <Text color={"primary.100"} fontSize="20" mt="-4">{album.year}/{album.month}</Text>          
                </VStack>
                <Image
                    source={{uri:album.image}}
                    alt="Alternate Text"
                    style={styles.image}
                    />
            </HStack>
            </Center>
        </NativeBaseProvider>
    );
};

const styles =StyleSheet.create({
    image:{
        width:188,
        height:120,
    },
})

export default Diarydetail;