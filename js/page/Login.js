import React from 'react';
import {AsyncStorage, View, KeyboardAvoidingView, TextInput, Image, Text, Platform, TouchableWithoutFeedback,TouchableHighlight,TouchableOpacity, Keyboard, Alert  } from 'react-native';
import storage from '../util/DeviceStorage'
import {userApi} from '../environmental/dev'
import styles  from '../css/LoginCss'
import {webSocketConnect , sendMsg} from '../MyWebsocket'
import { connect } from 'react-redux'
import {addMessage} from '../redux/actionCreators'

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginName:'',
            password:'',
            result:'',
            user:''
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

            //登陆后拿到userId去连接websocket
            webSocketConnect(obj.data.createUserId,this.props)
            if(obj.code == 1){
                // this.setState({user:obj.data})

                AsyncStorage.setItem('user',JSON.stringify(obj.data),function(err,result){
                    if(err){
                        console.log('存储类型错误')
                    }

                    // console.log("登陆时储存的用户信息:"+JSON.stringify(obj.data))
                })
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
                            // keyboardType='numeric'
                            keyboardType = 'default'
                            iosclearButtonMode='never'
                            // value  = {this.state.loginName}
                            onChangeText = {(text) => {
                                // console.log("账号框值   --"+text)
                                this.state.loginName = text
                        }}
                        />
                        <TextInput
                            style={styles.inputStyles}
                            placeholder="请输入密码"
                            backgroundColor="#dddddd"
                            secureTextEntry = {true}
                            // value = {this.state.password}
                            onChangeText = {(text =>{
                                this.state.password = text 
                            })}
                        />
                        <TouchableOpacity onPress={()=>{this.login(navigation);}}>
                            <View style={styles.button}>
                                <Text>
                                    登陆
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

let loginLog = [require("../img/loginLog.jpg")]
// export default LoginScreen;




const mapDispatch = dispatch => ({
    //方法名随便定义
    //@Param data 参数
    receiveMessage(message) {
        dispatch(
          //Action中定义的指令
       addMessage(message)
       )
    }
  })
  
  export default connect(
    (state) => ({
      //获取全局的state中的某个属性
        count:state.count
    }),
    //修改state中某个属性的方法
    mapDispatch
  )(LoginScreen)



// const mapState = state => ({
//     data: state.user
//   })
  
//   /* 改变redux state */
//   const mapDispatch = dispatch => ({
//     changeData(data) {
//       dispatch(updateUserInfo(data))
//     },
//   })
  
//   /* 连接 redux */
//   export default connect(
//     mapState,
//     mapDispatch
//   )(LoginScreen)

