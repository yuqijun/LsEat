
import React from 'react'
import {createMaterialBottomTabNavigator}  from '@react-navigation/material-bottom-tabs'
import orderScreen from './OrderPage'
import mineScreen from './MinePage'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import indexNavigation from '../navigation/IndexNavitation'

const Tab = createMaterialBottomTabNavigator();
function HomeScreen(){
    return(
            <Tab.Navigator 
            initialRouteName = 'Index' 
            activeColor="#f0f0f4"
            barStyle={{backgroundColor:"#FF8C00"}}
            >
                <Tab.Screen 
                name = 'index'
                component = {indexNavigation}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                        ),
                                            
                    }}
                />

                <Tab.Screen 
                name = 'order'
                component = {orderScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={26} />
                      )
                }}
                />

                <Tab.Screen 
                name = 'mine'
                component = {mineScreen}
                options = {{

                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={26} />
                    )      
                }}
                />
            </Tab.Navigator>
    )
}
export default HomeScreen;

