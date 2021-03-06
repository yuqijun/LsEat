import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './js/page/HompPage';
import LoginScreen from './js/page/Login.js';
import storage from './js/util/DeviceStorage'
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import socketPage from './js/page/SocketPage'
import  CommunicationListNavigation  from './js/navigation/CommunicationListNavigation'



  
const Stack = createStackNavigator();
// const user = storage.get('user');
const user = null;


  function communication() {
    return (

      <NavigationContainer  >
          <Stack.Navigator>
              <Stack.Screen  name='CommunicationListNavigation'  component={CommunicationListNavigation}   />
          </Stack.Navigator>


    
    
        {/* <Stack.Navigator 

        

        headerMode = 'null'>
        {
          user == null?(
            <>
              <Stack.Screen 
              name = "Login"
              component = {LoginScreen}
              options = {{
                headerStyle:{
                  backgroundColor:'#FF8C00',
                  
                },
                headerTitleStyle:{
                  textAlign:'center',
                  fontWeight:'bold',
                  fontSize:22
                  
                }
              }}
              /> 
              <Stack.Screen 
              name = "Home" 
              component = {HomeScreen}
              /> 
            </>
          ):(
            <>
              <Stack.Screen 
              name = "Home" 
              component = {HomeScreen}
              tabBarVisible
              
              />
            </>
          )
        }
        <Stack.Screen name = 'socket' component={ socketPage }  />
        </Stack.Navigator> */}

      </NavigationContainer>

    );


  }



  _readData =()=> {
    storage.load({
        key: 'user',
        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        autoSync: true,

        // syncInBackground(默认为true)意味着如果数据过期，
        // 在调用sync方法的同时先返回已经过期的数据。
        // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
        syncInBackground: true,

        // 你还可以给sync方法传递额外的参数
        syncParams: {
            extraFetchOptions: {
                // 各种参数
            },
            someFlag: true,
        },
    }).then(ret => {
        // 如果找到数据，则在then方法中返回
        // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
        // 你只能在then这个方法内继续处理ret数据
        // 而不能在then以外处理
        // 也没有办法“变成”同步返回
        // 你也可以使用“看似”同步的async/await语法

        console.log(JSON.stringify(ret));
    }).catch(err => {
        //如果没有找到数据且没有sync方法，
        //或者有其他异常，则在catch中返回
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                this.setState({ data: 'NotFoundError' });
                break;
            case 'ExpiredError':
                this.setState({ data: 'ExpiredError' });
                break;
        }
    })
}   


  const mapState = state => ({
    data: state.data
  })
  
  const mapDispatch = dispatch => ({
    changeData() {
      dispatch(change())
    }
  })
  
  export default connect(
    mapState,
    mapDispatch
  )(communication)




