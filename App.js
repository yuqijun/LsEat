import * as React from 'react';
import { View , Text } from 'react-native';




  function App() {
    return (
      <View>
        <Text>
          Hello !!
        </Text>
      </View>
    );


  }




// import { Drawer, List, NavBar, Icon } from 'antd-mobile';

// class App extends React.Component {
//   state = {
//     docked: false,
//   }
//   onDock = (d) => {
//     this.setState({
//       [d]: !this.state[d],
//     });
//   }
//   render() {
//     const sidebar = (<List>
//       {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
//         if (index === 0) {
//           return (<List.Item key={index}
//             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//             multipleLine
//           >Category</List.Item>);
//         }
//         return (<List.Item key={index}
//           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//         >Category{index}</List.Item>);
//       })}
//     </List>);

//     return (<div style={{ height: '100%' }}>
//       <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}>
//         Docked in document
//       </NavBar>
//       <Drawer
//         className="my-drawer"
//         style={{ minHeight: document.documentElement.clientHeight }}
//         contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
//         sidebarStyle={{ border: '1px solid #ddd' }}
//         sidebar={sidebar}
//         docked={this.state.docked}
//       >
//         Click upper-left corner
//       </Drawer>
//     </div>);
//   }
// }

// ReactDOM.render(<App />, mountNode);






  export default App;






// version 开发版本
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './js/page/HompPage';
// import LoginScreen from './js/page/Login.js';
// import storage from './js/util/DeviceStorage'
// import { connect } from 'react-redux'

  
// const Stack = createStackNavigator();
// const user = storage.get('user');



//   function App() {
//     return (
//       <NavigationContainer  
    
//       >
//         <Stack.Navigator 
//         headerMode = 'null'
//         >
//         {
//           user == null?(
//             <>
//               <Stack.Screen 
//               name = "Login"
//               component = {LoginScreen}
//               options = {{
//                 headerStyle:{
//                   backgroundColor:'#FF8C00',
                  
//                 },
//                 headerTitleStyle:{
//                   textAlign:'center',
//                   fontWeight:'bold',
//                   fontSize:22
                  
//                 }
//               }}
//               /> 
//               <Stack.Screen 
//               name = "Home" 
//               component = {HomeScreen}
//               /> 
//             </>
//           ):(
//             <>
//               <Stack.Screen 
//               name = "Home" 
//               component = {HomeScreen}
              
//               />
//             </>
//           )
//         }
//         </Stack.Navigator>
//       </NavigationContainer>
//     );


//   }
//   const mapState = state => ({
//     data: state.data
//   })
  
//   const mapDispatch = dispatch => ({
//     changeData() {
//       dispatch(change())
//     }
//   })
  
//   export default connect(
//     mapState,
//     mapDispatch
//   )(App)









