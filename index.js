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
import App from './App'
import { name } from './app.json'

class Apps extends Component {
  render() {
    return (
       // 挂载store,让app内部所有组件都可以使用
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(name, () => Apps)