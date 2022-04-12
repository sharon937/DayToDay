import React from 'react';
import { NavigationContainer ,useTheme } from '@react-navigation/native';
/*import { createNativeStackNavigator } from '@react-navigation/native-stack';*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Calenscreen from '../screen/Calenscreen';
import Settingscreen from '../screen/Settingscreen';
import Todoscreen from '../screen/Todoscreen';
import Diarylistscreen from '../screen/Diarylistscreen';
import Wishlistscreen from '../screen/WishlistScreen';

import MyTheme from '../theme/Mytheme';

const Tab = createBottomTabNavigator();

const Navigation =() =>{
    return(
        <NavigationContainer theme={MyTheme} >
            <Mytabs />
        </NavigationContainer>
    );
}

const Mytabs =()=>{

    const { colors } = useTheme();

    return(
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
            tabBarActiveTintColor: colors.light400,
            tabBarInactiveTintColor: colors.gray700,
            tabBarActiveBackgroundColor: colors.blue100,
            tabBarInactiveBackgroundColor:colors.blue100,
            headerShown: false,
            }}
        >
            <Tab.Screen
            name="HomeStack"
            component={Calenscreen}
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



export default Navigation;

