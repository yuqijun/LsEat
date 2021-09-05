// 顶部路由导航器
// 第一步  导入 @react-navigation/material-top-tabs 包
import React from 'react'
import {View,Imag,Button,StyleSheet, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';



// 第二步 使用一个变量去接收从 @react-navigation/material-top-tabs 包中的 createMaterialTopTabNavigator 方法返回的对象

const Tab = createMaterialTopTabNavigator();

// 第三步 准备几个页面

class Page1Screen extends React.Component{
  render(){
    console.log(this.props);
    return(
      <View>
        <Text>
          this  page1
        </Text>

      </View>
    )
  }
}
class Page2Screen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this  page2
        </Text>
      </View>
    )
  }
}
class Page3Screen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this  page3
        </Text>
      </View>
    )
  }
}

// 第四步定义一个函数 返回Tab对象
const Application =  ()=>{
  return(
    <NavigationContainer  >
    <Tab.Navigator  initialRouteName="Page3" >
      <Tab.Screen 
        name = 'Page1'
        component = {Page1Screen}
      />
    <Tab.Screen 
        name = 'Page2'
        component = {Page2Screen}
      />
    <Tab.Screen 
        name = 'Page3'
        component = {Page3Screen}
      />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Application;