/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => 
//     App
// );




import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './js/redux/StoreConfig'
// import store from './js/base/redux/StoreConfig'
import App from './App'
import { name } from './app.json'
import { StyleSheet ,SafeAreaView} from 'react-native';
class Apps extends Component {





  render() {




    return (
       // 挂载store,让app内部所有组件都可以使用
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>

          <App />  

        </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  // …,
  safeArea: {

    backgroundColor: 'white',
    // width:width
    flex:1,
    // marginTop:-25,
    // marginBottom:-40
  }
})

AppRegistry.registerComponent(name, () => Apps)