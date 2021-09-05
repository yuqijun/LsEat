import React from 'react';
import {StyleSheet,Button,View,Image,Text} from 'react-native';
//①  下载5.0导航 @react-navigation/native     @react-navigation/stack
// ② 导入5.0 栈导航路由
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

// ③ 准备测试的页面 （Home 页面和 deatil（page) 页面
class DetailScreen extends React.Component{
  
  render(){
    const {navigation} = this.props
    return(
      <View>
        <Text>
          this DetailScreen
        </Text>
        <Button 
        title ='go to home'
        onPress={()=>{
            navigation.navigate('Home')
        }}
        />
      </View>
    )
  }
}


class HomeScreen extends React.Component{
  render(){
    const {navigation} = this.props;
    return (
      <View>
        <Text>
          this Home page
        </Text>
        <Button 
        title = "Go to Detail"
        onPress={()=>{
          // 这里的Detail是栈导航中配置的的路由名称，而不是组件名称
            navigation.navigate('Detail')
          }}
        />
      </View>
    )
  }
}

// ④  以组件的方式设置导航
const App  =  ()=>{
  return (
    //Navigetor 容器
    <NavigationContainer>
      {/* 栈路由配置 */}
      <Stack.Navigator>
        {/* 配置路由 */}
        <Stack.Screen  name='Home'    component={HomeScreen} />
        <Stack.Screen  name='Detail'  component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App

