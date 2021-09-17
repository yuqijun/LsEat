import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import IndexPage from '../page/IndexPage'
import StoreGoodsListPage from '../page/StoreGoodsListPage'

const Stack = createStackNavigator();



function indexNavigation(){
    return(

            <Stack.Navigator 
            initialRouteName='index' 
            >

                <Stack.Screen 
                name='index' 
                component={IndexPage}
                options={{
                    title:'首页',
                    // headerShown:false,
                }}
                />

                <Stack.Screen  
                name='storeGoodsListPage'
                component={StoreGoodsListPage}
                
                options={{
                    title:'商店',
                    // HeaderTitle:null,
                    

                }}
                />
            </Stack.Navigator>
    );
}



export default indexNavigation;