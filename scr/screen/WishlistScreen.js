import React from 'react';
import { ScrollView, Input, AspectRatio, Image, IconButton, Divider, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { useState } from 'react/cjs/react.production.min';
import {Ionicons,AntDesign } from "@expo/vector-icons"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Colorstheme from '../theme/Colorstheme';




const WishListScreen = () => {
  const instState = [{
    title: "Travel Abroad",
    isCompleted: false
  }, {
    title: "Go Camping",
    isCompleted: false
  }, {
    title: "Picnic",
    isCompleted: false
  }, {
    title: "Go To A Concert",
    isCompleted: false
 
  }, {
    title: "Go To The Beach",
    isCompleted: false
  }];

  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = title => {
    if (title === "") {
      toast.show({
        title: "Add New WishList",
        status: "warning"
      });
      return;
    }

    setList(prevList => {
      return [...prevList, {
        title: title,
        isCompleted: false
      }];
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };


  return (
    <NativeBaseProvider theme={Colorstheme}>
      <SafeAreaView >
    <Box > 
    <VStack bg="primary.light" h="100%">
    <Center >
        <Text fontSize={30} color="primary.100" m="3">Wishlist</Text>     
    </Center>
    <Center bg="#F9FBFF" w="100%">
      <ScrollView  h="100%">
        <Box bg="#EDEFF2" w="343" h="100%" padding="2" mt="2" mx="auto" borderTopRadius="166" borderBottomRadius="40">

          <AspectRatio h="85" mb="30">
          <Image  ml="50" w="224" h="85"
            source={{uri:'https://raw.githubusercontent.com/leeecch/mid/main/make%20a%20wish%20(1).png'}}
            alt='make a wish'
          />
        </AspectRatio>
          <VStack space={5} ml="5" >
            {list.map((item, itemI) => 
            <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <IconButton icon={<Icon as={Ionicons} name="moon-outline" />} isChecked={item.isCompleted} 
                onPress={() => handleStatusChange(itemI)} value={item.title} _icon={{
                  color: "#1D2942"}}/>
                  <VStack w="100%">
                     <Text width="100%" fontSize={20} flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                      color: item.isCompleted ? "gray.400" : "gray.400"
                      }} _dark={{
                      color: item.isCompleted ? "gray.400" : "gray.400"
                      }} onPress={() => handleStatusChange(itemI)}>
                      {item.title}
                    </Text>
                    <Divider bg="#1D2942" w="215"/>
                  </VStack>
                  
              </HStack>)}
 
          </VStack>
  
            
            <IconButton icon={<Icon as={AntDesign} name="pluscircleo" size="6" mt="5"/>} onPress={() => {
            addItem(inputValue);
            setInputValue("");}} _icon={{color: "#1D2942"}}/>
         
        </Box>    

      </ScrollView>      
    </Center>
    </VStack>
    </Box>
    </SafeAreaView>
    </NativeBaseProvider>

  );
}

export default WishListScreen;