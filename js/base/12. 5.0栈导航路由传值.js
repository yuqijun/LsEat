import React from 'react';
import {StyleSheet,Button,View,Image,Text} from 'react-native';
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
          //① 设置虚拟数据对象
          let params = {id:999,defualtValue:" come here"}  
          //② 将数据对象传给navigate第二个参数
          navigation.navigate('Detail',params);
          }}
        />
      </View>
    )
  }
}


class DetailScreen extends React.Component{
  
  render(){
    //③ 从this.props中获取 route对象
    const {navigation,route} = this.props
    //④ 从route对象中获取params对象解构数据
    const {id} = route.params;
    const {defualtValue} = route.params;
    return(
      <View>
        <Text>
          this DetailScreen
        </Text>
        <Text>
          {/* ⑤ 引用数据 */}
          this id : {id} from HomePage
        </Text>

        <Text>
          this defualtValue : {defualtValue} from Homepage
        </Text>
        <Button 
        title ='go to home'
        onPress={()=>{

            navigation.navigate('Home');
        }}
        />
      </View>
    )
  }
}




const App  =  ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home'    component={HomeScreen} />
        <Stack.Screen  name='Detail'  component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default App

