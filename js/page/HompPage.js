
import React from 'react'
import {createMaterialBottomTabNavigator}  from '@react-navigation/material-bottom-tabs'
import orderScreen from './OrderPage'
import mineScreen from './MinePage'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import indexNavigation from '../navigation/IndexNavitation'
import orderNavigation from '../navigation/OrderNavigation'

const Tab = createMaterialBottomTabNavigator();
function HomeScreen(){
    return(

      
            <Tab.Navigator 
            // headerMode = 'null'

            initialRouteName = 'Index' 
            activeColor="#f0f0f4"
            // barStyle={{backgroundColor:"#FF8C00",innerHeight:100,outerHeight:100}}
            barStyle={{backgroundColor:"#FF8C00"}}
            tabBarStyle = {{
                display:'none'
            }}
            >




                <Tab.Screen 
                name = 'index'
                component = {indexNavigation}
                options = {{
                    headerShown:false,

                
                    title:'首页',
                    
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                        ),

                    tabBarStyle :{
                        display:'none'
                    }    
                                            
                    }}
                />

                <Tab.Screen 
                name = 'order'
                component = {orderNavigation}
                options = {{
                    title:'订单',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={26} />
                      ),

                      tabBarStyle :{
                        display:'none'
                    }     
                }}
                />

                <Tab.Screen 
                name = 'mine'
                component = {mineScreen}
                options = {{
                    title:'我的',

                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={26} />
                    ),
                    tabBarStyle :{
                        display:'none'
                    }          
                }}
                />


    
            </Tab.Navigator>


         
    )
}
export default HomeScreen;

