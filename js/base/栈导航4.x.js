import React from 'react';
import {StyleSheet,Button,View,Image,Text} from 'react-native';
// ① 导入路由组件
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'



const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

// ② 准备测试的页面 （Home 页面和 deatil（page) 页面
class Page1Screen extends React.Component{
  render(){
    return(
      <View>
        <Text>
          this page1
        </Text>
      </View>
    )
  }
}


class App extends React.Component{
  // static navigationOptions = {
  //   title:"Home",
  //   headerBackTitle:"主页返回"
  // };
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
            navigation.navigate('Detail')
          }}
        />
      </View>
    )
  }
}

// ③ 配置导航
const contail = createStackNavigator(
  {
    Home:App,
    Detail:Page1Screen
  },{
    initialRouteName:'Home'
  }
)

const AppContainer = createAppContainer(contail)
export default AppContainer

