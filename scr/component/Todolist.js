import React,{ useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { ScrollView, Input, AspectRatio, Image, IconButton, Divider, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider, Pressable, View,useColorMode } from "native-base";
import {Ionicons,AntDesign } from "@expo/vector-icons";
import Task from './task';
import {lighttheme,darktheme} from "../theme/Modetheme";


const Todolist = () => {
 
  const { colorMode } = useColorMode();
  const Mytheme = colorMode == 'light' ? lighttheme : darktheme;
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const deleteTask = (deleteIndex) => {
    setTaskItems(taskItems.filter((value, index) => index != deleteIndex));
  }
 

  return (
    <Box theme={Mytheme}>
    <Box  zIndex={-99}  _dark={{ bg: "primary.100" }}
                    _light={{ bg: "primary.light" }} >
        <Box  background={"#EDEFF2"}w="324" h="400" padding="2" mt={"100"} mx="auto"  borderRadius={15} shadow={3}>

          
          <Box bg="#F9FBFF" w="100%" h="100%">
           <ScrollView >
          
              <Box bg="#EDEFF2" w="324" h="400" padding="2"  mx="auto" /* borderRadius={15} shadow={3}*/>
                <Center>
              <Text pt={30} fontSize="24" color='#1D2942' textAlign="center" >To Do List</Text>
              </Center>
                <View style={styles.item}>

                {
                  taskItems.map((item, index) => {
                    return (
                      <View key={index} style={styles.taskContainer}>
                        <Task index={index + 1} text={item} deleteTask={() => deleteTask(index)}/>
                      </View>
                    )
                  
                  })
                }

                {/*<Task text={'Task 1'}/>
                <Task text={'Task 2'}/> */}
              </View>
              
              <KeyboardAvoidingView
                  behavior={Platform.OS === "android" ? "padding" : "height"}
                  style={styles.writeTaskWrapper}
                >
                  <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)}/>

                  <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addTask}>
                      <Text style={styles.add}>+</Text>
                    </View>
                  </TouchableOpacity>
                </KeyboardAvoidingView>

              
              
                
              </Box>    
              
      </ScrollView> 
     
    </Box>
        </Box>    
        <AspectRatio w="100%" mb="0">
                <Image
                  source={{uri:'https://raw.githubusercontent.com/leeecch/mid/main/Slice%201.png'}}
                  alt='cloud'
                />
        </AspectRatio> 
    </Box>
    
    </Box>
   

  );
}

const styles=StyleSheet.create({
  title:{
    paddingTop:30,
    fontSize:24, 
    color:'#1D2942', 
    textAlign:'center',
    marginBottom:24
  },
  item: {
    

  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 20,
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:25,
    marginRight:25
  },
  input:{
    paddingVertical:12,
    paddingHorizontal:15,
    backgroundColor:'#F9FBFF',
    borderRadius:60,
    borderColor:'#1D2942',
    borderWidth:1,
    width:230,
  },
  addTask:{
    width:28,
    height:28,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#1D2942',
    borderWidth:1,
  },
  add:{

  }

});
export default Todolist;