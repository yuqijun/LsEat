import {Text, View,SafeAreaView} from 'react-native'; 
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import {OrderNavigation} from '../navigation/OrderNavigation'

class OrderScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginName:'',
            password:'',
            result:''
        }
    }
    render(){
        const Tab = createMaterialTopTabNavigator();
        return (

    <Tab.Navigator
      
    >
      <Tab.Screen name="Home" component={
        ()=>{
          return(
          

            <SafeAreaView>
            <View>
              <Text>
              这是order页面
              </Text>
            </View>
            </SafeAreaView>
          
          
          )
        }
      } />
      <Tab.Screen name="Settings" component={
        ()=>{
          return(
          
            <SafeAreaView>
            <View>
              <Text>
                这是订单页面
              </Text>
            </View>
            </SafeAreaView>

          )
        }
      } />
    </Tab.Navigator>
      );
    }
}
export default OrderScreen;