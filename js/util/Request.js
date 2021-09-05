import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from 'react-native';

let common_url = 'http://192.168.188.90:8080/';
class Request extends React.Component{

     request(url, method, params = ''){
        //fetch请求
        let header = {
            "Content-Type": "application/json;charset=UTF-8",
            // "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
        };
        if(params == ''){   //如果网络请求中没有参数
            return new Promise(function (resolve, reject) {
                fetch(common_url + url, {
                    method: method,
                    headers: header
                }).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:',url,responseData);  //网络请求成功返回的数据
                        resolve(responseData);
                    })
                    .catch( (err) => {
                        console.log('err:',url, err);     //网络请求失败返回的数据        
                        reject(err);
                    });
            });
        }else{   //如果网络请求中带有参数
            return new Promise(function (resolve, reject) {
                fetch(common_url + url, {
                    method: method,
                    headers: header,
                    body:JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
                }).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:',url, responseData);   //网络请求成功返回的数据
                        resolve(responseData);
                    })
                    .catch( (err) => {
                        console.log('err:',url, err);   //网络请求失败返回的数据  
                        reject(err);
                    });
            });
        }
    }

}

module.exports = Request;