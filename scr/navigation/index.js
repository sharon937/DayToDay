import React from 'react';
import { NavigationContainer ,useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable,  } from 'native-base';
import { extendTheme,useColorMode } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Calenscreen from '../screen/Calenscreen';
import Settingscreen from '../screen/Settingscreen';
import Todoscreen from '../screen/Todoscreen';
import Diarylistscreen from '../screen/Diarylistscreen';
import Wishlistscreen from '../screen/WishlistScreen';
import Nullscreen from '../screen/Nullscreen';
import ActionButton from '../component/Actionbutton';

import MyTheme from '../theme/Mytheme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation =() =>{

    return(
        <NavigationContainer theme={MyTheme} >
            <Mytabs />
        </NavigationContainer>
    );
}

const Mytabs =()=>{

    const { colors } = useTheme();
    const {colorMode} = useColorMode();
    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
            tabBarActiveTintColor: colorMode == 'light' ? '#F9FBFF' :'#1D2942',
            tabBarInactiveTintColor: colorMode == 'light' ? '#687588' :'#B3BDCB',
            tabBarActiveBackgroundColor: colorMode == 'light' ? '#1D2942' :'#F9FBFF',
            tabBarInactiveBackgroundColor:colorMode == 'light' ? '#1D2942' :'#F9FBFF',
            headerShown: false,
            }}
        >
            <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
                title:"",
                tabBarIcon:({color}) =>(
                    <Feather name="home" color={color} size={26}/>
                ),
                tabBarIconStyle:{
                    marginTop:8
                  },
               
            }}
            />
           <Tab.Screen
            name="Diarylist"
            component={Diarylistscreen}
            options={{
                title:"",
                tabBarIcon:({color}) =>(
                    <MaterialIcons name="photo-library" color={color} size={26}/>
                ),
                tabBarIconStyle:{
                    marginTop:8
                  },
            }}
            />  
            <Tab.Screen
            name="Actionbutton"
            component={Nullscreen}
            options={{
                title:"",
                tabBarIcon:({color})=><ActionButton/>  
            }}
            />         
           <Tab.Screen
            name="Wishlist"
            component={Wishlistscreen}
            options={{
                title:"",
                tabBarIcon:({color}) =>(
                    <MaterialCommunityIcons name="file-star-outline" color={color} size={26}/>
                ),
                tabBarIconStyle:{
                    marginTop:8
                  },
            }}
            />  
            <Tab.Screen 
            name="Settings" 
                component={Settingscreen} 
                options={{
                title: "",
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
                tabBarIconStyle:{
                    marginTop:8
                  },
                }}
            />          
        </Tab.Navigator>
    );
}

const HomeStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Calenscreen}
                options={{
                    title:'',
                    headerShown: false,
                }}
            />
            <Stack.Screen
             name="Todo"
             component={Todoscreen}
             options={({navigation})=>({
                 title:'',
                 headerShown: false,
             })}
            />
        </Stack.Navigator>
    );
}

export default Navigation;

