import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Image, Text, Platform, TouchableWithoutFeedback,TouchableHighlight, Keyboard, Alert  } from 'react-native';
import storage from '../util/DeviceStorage'
import {userApi} from '../environmental/dev'
import styles  from '../css/LoginCss'

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginName:'',
            password:'',
            result:''
        }
    }

    /* 用户登陆事件 */
    login(navigation){
        var opt = {
            method:"POST",
            body:JSON.stringify({
                loginName:this.state.loginName,
                password:this.state.password
            }),
            headers:{
                Accept: "application/json", "Content-Type": "application/json",
            }
        };
        let url = userApi+'/api/index/login'
        fetch(url,opt)
        .then(response => response.json())
        .then((json)=>{
            this.setState({result:JSON.stringify(json)});
            var obj = JSON.parse(this.state.result);
            if(obj.code == 1){
                storage.save('user',obj.data);
                console.log("即将跳转至 Home页面")
                navigation.navigate("Home",obj.data);
            }else{
                alert("登陆失败")
            }
        })
    }


    /* 视图 */
    render(){
        const {navigation} = this.props;
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.inner}>
                        {
                            loginLog.map((item,index)=>{
                                return <Image style={styles.loginLogImgStyle} key={index} source={item}  />
                            })
                        }

                        <TextInput
                            style={styles.inputStyles}
                            placeholder="请输入账号"
                            backgroundColor="#dddddd"
                            keyboardType='numeric'
                            iosclearButtonMode='never'
                            onChangeText = {(text) => {
                                // console.log("账号框值   --"+text)
                                this.state.loginName = text
                        }}
                        />
                        <TextInput
                            style={styles.inputStyles}
                            placeholder="请输入密码"
                            backgroundColor="#dddddd"
                            onChangeText = {(text =>{
                                this.state.password = text 
                            })}
                        />
                        <TouchableHighlight onPress={()=>{this.login(navigation);}}>
                            <View style={styles.button}>
                                <Text>
                                    登录
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

let loginLog = [require("../img/loginLog.jpg")]
export default LoginScreen;





