import  React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  allOrder  from  '../page/order/AllOrder'


import  PendingPayment  from  '../page/order/PendingPayment'

import  Refund  from  '../page/order/Refund'

import  ToBeEvaluated  from  '../page/order/ToBeEvaluated'

import  ToBeUsed  from  '../page/order/ToBeUsed'

import  WiteReceived  from  '../page/order/WiteReceived'
import { Text, View,SafeAreaView } from 'react-native';
import allOrderNavigation from '../navigation/Order/AllOrderNavigation'


const Tab = createMaterialTopTabNavigator();

function OrderNavigation() {
  return (
    <Tab.Navigator  initialRouteName='all' >
      <Tab.Screen name="all" component={allOrderNavigation} options={{title: '全部'}} />
      <Tab.Screen name="pendingPayment" component={PendingPayment} options={{title:'待付款'}} />
      <Tab.Screen name="witeReceived" component={WiteReceived} options={{title:'待收货'}} />
      <Tab.Screen name="toBeused" component={ToBeUsed} options={{title:'待使用'}} />
      <Tab.Screen name="toBeEvaluated" component={ToBeEvaluated} options={{title:'待评价'}} />
      <Tab.Screen name="refund" component={Refund} options={{title:'售后/退款'}} />
    </Tab.Navigator>
  );
}

export default OrderNavigation;