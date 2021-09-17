
import React from 'react'
import {createMaterialBottomTabNavigator}  from '@react-navigation/material-bottom-tabs'
import orderScreen from './OrderPage'
import mineScreen from './MinePage'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import indexNavigation from '../navigation/IndexNavitation'
import orderNavigation from '../navigation/OrderNavigation'
import {SafeAreaView} from 'react-native'

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
                
                    title:'首页',
                    
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                        ),
                                            
                    }}
                />

                <Tab.Screen 
                name = 'order'
                component = {orderNavigation}
                options = {{
                    title:'订单',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={26} />
                      )
                }}
                />

                <Tab.Screen 
                name = 'mine'
                component = {mineScreen}
                options = {{
                    title:'我的',

                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={26} />
                    )      
                }}
                />


    
            </Tab.Navigator>


         
    )
}
export default HomeScreen;

