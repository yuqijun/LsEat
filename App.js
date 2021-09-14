


// /* 底部抽屉 */
// import * as React from 'react';
// import { View , Text,Dimensions,Animated,TouchableOpacity,FlatList,StyleSheet,StatusBar } from 'react-native';
// const {width,height} = Dimensions.get('window')
// let shoppingCarListElementLength = (height*0.4)-70
// // let shpooingCarListElementLength = 70
// export  default class App extends React.Component{


//   constructor(props){
//     super(props)
//   }

//   state={
//     //  底部抽屉隐藏深度
//     translateValue: new Animated.ValueXY({x:0, y:shoppingCarListElementLength})

//   }

  


//     render (){

//       const DATAA = [
//         {
//           id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//           title: 'First Item',
//         },
//         {
//           id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//           title: 'Second Item',
//         },
//         {
//           id: '58694a0f-3da1-471f-bd96-145571e29d72',
//           title: 'Third Item',
//         },
//         {
//           id: '58694a0f-3da1-471f-bd96-145571e29d73',
//           title: 'Third Item',
//         },
//         {
//           id: '58694a0f-3da1-471f-bd96-145571e29d74',
//           title: 'Third Item',
//         },
//       ];

//       const Item = ({ title }) => {
//         return (
//           <View style={styles.item}>
//             <Text style={styles.title}>{title}</Text>
//           </View>
//         );
//       }

//       const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           marginTop: StatusBar.currentHeight || 0,
//         },
//         item: {
//           backgroundColor: '#f9c2ff',
//           padding: 20,
//           marginVertical: 8,
//           marginHorizontal: 16,
//         },
//         title: {
//           fontSize: 32,
//         },
//       });


//       const renderItem = ({ item }) => (
//         <Item title={item.title} />
//       );

//       return(
//         //  最外层盒子
//       <View style={{flex:1,backgroundColor:'red',justifyContent:'flex-end'}}>
//         <TouchableOpacity 
//          onPress={() => {
//           this._closeBottomDrawer();
//           }}
//         >
//         <Text>
//           Hello !!
//         </Text>
//         </TouchableOpacity>

//         <Animated.View  style={{width:width,height:height*0.4,backgroundColor:'blue',transform:[{translateX:0},{translateY:this.state.translateValue.y,}],
//         borderTopLeftRadius:15,borderTopRightRadius:15,

//       }}>
//           <TouchableOpacity 
//           style = {{height:70}}
//             onPress={() => {
//             this._openBottomDrawer();
//             }}
//           >
//               <Text >
//                 购买列表
//               </Text>
//           </TouchableOpacity>



//           <FlatList
//         data={DATAA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         alwaysBounceHorizontal = {false}
//         overScrollMode = {'never'}
//         bounces = {false}
//       />


//         </Animated.View>


//       </View>
//       )
//     }

//     // 提供一个open 方法让隐藏的购物车元素完整的展现出来
//     _openBottomDrawer(){

//       Animated.spring(this.state.translateValue,
//           {
//               toValue: {x:0, y:0},    //目标值
//               velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//               tension: 25,               //控制速度。默认值40。
//               friction: 7,                //控制“弹性”/过冲。默认值7。
//           }).start();
//   }

//   _closeBottomDrawer(){
//     Animated.spring(this.state.translateValue,{
//       toValue: {x:0,y:shoppingCarListElementLength},
//       velocity: 100,
//       tension: 25,
//       friction: 7
//     }).start()
//   }


  


// }







import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './js/page/HompPage';
import LoginScreen from './js/page/Login.js';
import storage from './js/util/DeviceStorage'
import { connect } from 'react-redux'

  
const Stack = createStackNavigator();
// const user = storage.get('user');
const user = null;


  function App() {
    return (
      <NavigationContainer  
    
      >
        <Stack.Navigator 
        headerMode = 'null'
        >
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
              
              />
            </>
          )
        }
        </Stack.Navigator>
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
  )(App)









