import React from 'react';
import {StyleSheet,Button,View,Image,Text} from 'react-native';
//导航容器
import {NavigationContainer} from '@react-navigation/native'
//栈导航
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();



const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})





//需求：
//容器判断是否是加载状态，如果是加载状态就显示 welcome 页面
//如果不是加载状态就判断有没有登录标记，如果没有登录标记就跳转到 login 页面如果有登录标记就跳转到 Home 页面 

//实现方案
// 准备三个页面，一个导航器容器  , 一个整合页面的的类（最后导出的也是这个类）
// 在导航器容器中进行三元表达式的方式提供正确的 页面


class WelComeScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this WelComen page
        </Text>
      </View>
    )
  }
}


class LoginScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this LoginScreen page
        </Text>
      </View>
    )
  }
}


class HomeScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this HomeScreen page
        </Text>
      </View>
    )
  }
}

class AppNavigator extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      token:"dsfafafa"
    }
  }
  render(){
    return(<NavigationContainer>
      <Stack.Navigator>
        {
          this.setState.isLoading?(<
            Stack.Screen
            name = "WelCome"
            component = {WelComeScreen}
          />):
            this.state.token==null?(
              <Stack.Screen
              name ="Login"
              component = {LoginScreen}
              />
            ):(
              <Stack.Screen
              name = "Home"
              component = {HomeScreen}
              />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>)
  }

}

export default AppNavigator

