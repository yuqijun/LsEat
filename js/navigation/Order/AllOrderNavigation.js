import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  React   from 'react';
import { Text,View } from 'react-native';
import allOrder  from '../../page/order/AllOrder'
import { createStackNavigator } from '@react-navigation/stack';
import orderDetail from '../../page/order/OrderDetail'

// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();

export default function AllOrderNavigation(){
    return (
            <Stack.Navigator
            options = {{
                tabBarStyle: { display: 'none' }
            }}
                initialRouteName = 'allIndex' 
            >
                <Stack.Screen name = 'allIndex' component={ allOrder}  options={{headerShown:false , title:'返回'}} />
                <Stack.Screen  name = 'allInner'  component={orderDetail}  
                options={{
                    title:''
            }}  />

            </Stack.Navigator>
    )
}

