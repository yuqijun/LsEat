import React from 'react'
import {NavigationContainer}  from '@react-navigation/native'
// 第一步 导入底部材料导航包
import {createMaterialBottomTabNavigator}  from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View,Text } from 'react-native';

// 第二步 创建createMaterialBottomTabNavigator 对象

const bottom =  createMaterialBottomTabNavigator();

// 第三步  准备测试页面

class  DeleteScreen extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return (
      <View>
        <Text>
          this delete page
        </Text>
      </View>
    )
  }
}
class  FolderScreen extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return (
      <View>
        <Text>
          this folder page
        </Text>
      </View>
    )
  }
}
class  BarcodeScreen extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return (
      <View>
        <Text>
          this Barcode page
        </Text>
      </View>
    )
  }
}


const App = ()=>{
  return(
    <NavigationContainer>
    <bottom.Navigator>
      <bottom.Screen name = 'Delete' component={DeleteScreen} 
      options= {{
        tabBarLabel:"Delete",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        )
      }}
      />
      <bottom.Screen name = 'Setting' component={BarcodeScreen} />
      <bottom.Screen name = 'Local' component={FolderScreen} />
    </bottom.Navigator>
  </NavigationContainer>
  )
} 

export default App