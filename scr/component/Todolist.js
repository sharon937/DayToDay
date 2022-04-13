import React from 'react';
import { ScrollView, Input, AspectRatio, Image, IconButton, Divider, Text, Box, VStack, HStack,useColorMode,  Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { useState } from 'react/cjs/react.production.min';
import {Ionicons,AntDesign } from "@expo/vector-icons"
import {lighttheme,darktheme} from "../theme/Modetheme"


const Todolist = () => {
  const instState = [{
    title: "Homework",
    isCompleted: false
  }, {
    title: "Meeting ",
    isCompleted: false
  }, {
    title: "Garbage",
    isCompleted: false
  }, {
    title: "Clean up",
    isCompleted: false
  }];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = title => {
    if (title === "") {
      toast.show({
        title: "Add New List",
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
  const { colorMode } = useColorMode();
  const Mytheme = colorMode == 'light' ? lighttheme : darktheme;

 

  return (
    <Box theme={Mytheme}>
    <Center  zIndex={-99}  _dark={{ bg: "primary.100" }}
                    _light={{ bg: "primary.light" }} >
        <Box  background={"#EDEFF2"}w="324" h="400" padding="2" mt={"100"} mx="auto"  borderRadius={15} shadow={3}>

          <Text pt={30} fontSize="24" color='#1D2942' textAlign="center" mb="5">To Do List</Text>
          <VStack space={5} ml="5">
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
                    <Divider bg="#1D2942" w="200"/>
                  </VStack>
                  
              </HStack>)}
 
          </VStack>
  
            
            <IconButton icon={<Icon as={AntDesign} name="pluscircleo" size="6" mt="5"/>} onPress={() => {
            addItem(inputValue);
            setInputValue("");}} _icon={{color: "#1D2942"}}/>
         
        </Box>    
        <AspectRatio w="100%" mb="0">
          <Image
            source={{uri:'https://raw.githubusercontent.com/leeecch/mid/main/Slice%201.png'}}
            alt='cloud'
          />
        </AspectRatio> 
    </Center>
    </Box>
   

  );
}

export default Todolist;