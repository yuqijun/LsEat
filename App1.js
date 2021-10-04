import React from 'react'
import {View , Text,DeviceEventEmitter,AppState,AsyncStorage,Image,ScrollView,Dimensions,KeyboardAvoidingView,
  TouchableWithoutFeedback,Platform,StyleSheet,Button,Keyboard,TextInput,TouchableOpacity}  from 'react-native'

  
//   import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const {width,height} = Dimensions.get('window')
export default class SocketPage extends React.Component{
    

  
    constructor(props){
        super(props)

    // 头像皮卡丘 https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto         50
    // 卡通头像 萌妹 https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto    41
    this.state = {
        //scorllView 高度
        scrollViewHeight: height*0.8,
        //
        receiveMsg: {},
        ws: {},
        user:'',
        receiveId:'',
        messages:[
            {'receiveId':'1442751531196878850','info':'hello !','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},
            {'receiveId':'1442751531196878850','info':'在吗','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},
            {'receiveId':'1442751531196878850','info':'有点事找你','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},
            {'receiveId':'1442751531196878850','info':'欠我的两百块什么时候能还我','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},


            {'receiveId':'1433440289344983041','info':'？？？？？','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'凭本事借的钱为什么要还？','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? ','sendId':'消息发出者的id','receiveAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto','sendAvater':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'借条都没有，你跟我隔这搁这呢','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'88 了您呢','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},


            {'receiveId':'1442751531196878850','info':'你他妈 有种在这里不要走，我现在去摇人','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},
            {'receiveId':'1442751531196878850','info':'妈的','sendId':'1433440289344983041','sendAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto'},

            {'receiveId':'1433440289344983041','info':'你他妈去阿','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'老子就在这里等着','sendId':'1442751531196878850',  'sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},
            {'receiveId':'1433440289344983041','info':'我要走了就不是东兴乌鸦','sendId':'1442751531196878850','sendAvatar':'https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto'},

        ]
    }
    }




    async componentDidMount() {
        
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);

      const { route } = this.props
      //④ 从route对象中获取params对象解构数据
      const {postmanId} = route.params;

      console.log("获取配送员的 id ："+postmanId)

        var _this = this;
        var _createUserId ='';
        this.setState({
          receiveId: postmanId
        })


        var keys = ["user"];
        var value =  AsyncStorage.multiGet(keys,function(err,result){
            if(err){
                console.log('AsyncStorage 获取保存的登陆用户信息时发生异常')
                return;
            } 
              var user =  result[0][1];
              _this.setState({userAddress: JSON.parse(user).receivingAddress,user: JSON.parse(user)})
    
            
             var objUser =  JSON.parse(user);
             _createUserId = objUser.createUserId
            //  console.log("websoucket 异步获取的用户信息："+JSON.stringify(objUser))
             _this.setState({
                 user: objUser
             })

            


            // 首次进入建立连接
            _this.WebSocketConnect(_createUserId);
            return objUser; 
        })



        // console.log("websocket 获取用户信息:"+JSON.stringify(value))

        // // 首次进入建立连接
        // this.WebSocketConnect();
        // 添加监听前，先移除之前的监听
        AppState.removeEventListener('change', this.handleAppStateChange);
        // 添加APP运行状态监听
        AppState.addEventListener('change', this.handleAppStateChange);




      }


    //键盘弹起后执行
    keyboardDidShow = (e) => {
        // console.log(e)
        // console.log("键盘弹起来")
        // this._scrollView.scrollTo({x: 0, y: e.startCoordinates.height, animated: true});
        // this._scrollView.scrollTo({x: 0, y: 10000, animated: true});
        this.setState({scrollViewHeight:height*0.8-e.endCoordinates.height-40})
    }

    //键盘收起后执行
    keyboardDidHide = () => {
        // console.log("键盘收起")
        // this._scrollView.scrollTo({x: 0, y: 5000, animated: true});
        this.setState({scrollViewHeight:height*0.8})
    }



     
      componentWillUnmount() {
        // 组件销毁前，移除监听
        AppState.remove('change', this.handleAppStateChange);

        //退出时销毁监听
        this.keyboardWillShowListener && this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener && this.keyboardWillHideListener.remove();
      }
      //状态改变响应
      handleAppStateChange(appState) {
        // console.log('当前状态为:'+appState);
        // 只有ios系统才需要做状态处理
        if(Platform.OS === "ios"&&appState=="active"){
          // 建立前先关闭之前的废弃连接
          this.state.ws.close();
          this.WebSocketConnect();
          // ios 唤醒时补充请求一下数据
          DeviceEventEmitter.emit("sceneChange", {
            // 参数
          });
        }
      }

    WebSocketConnect(createUserId) {


        var websocket = null;
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            // websocket = new WebSocket("ws://localhost:8080/websocket/yuqijun?userId="+createUserId);
            websocket = new WebSocket("ws://localhost:8080/websocket/"+createUserId+"?");
        }
    
        websocket.onerror = function () {
          console.log("WebSocket连接发生错误");
        };
    
      websocket.onopen = function () {
        console.log("WebSocket连接成功");
      }
    
    
        //接收到消息的回调方法
        websocket.onmessage = function (event) {
        //   alert("服务端返回：："+event.data);
        //   this.state.messages.push(event.data)
        }
    
    
          //连接关闭的回调方法
          websocket.onclose = function () {
            console.log("WebSocket连接关闭");
          }
    
          this.setState({
            ws: websocket
          })
    
      }
    
    
      sendMsg(){


        //组装消息体

        let message   = {
          sendId:this.state.user.createUserId,
          sendAvater:this.state.user.avatar,
          recevieId: this.state.receiveId,
          info:'模拟消息'
        }

        this.state.ws.send(JSON.stringify(message))

      }


      

    render(){

      const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        inner: {
          padding: 24,
          flex: 1,
          flexDirection:'row',
          justifyContent:'flex-start',

        },
        header: {
          fontSize: 36,
          marginBottom: 48
        },
        textInput: {
          height: 40,
          borderColor: "#000000",
          borderBottomWidth: 1,
          marginBottom: 36,
          width:width*0.7
        },
        btnContainer: {
          backgroundColor: "white",
          marginTop: 12
        }
      });

        var messages = [] 
        for (let i = 0; i < this.state.messages.length; i++) {
            messages.push(
                <View style = {{flexDirection:'row', justifyContent: this.state.messages[i].sendId==this.state.user.createUserId?'flex-end':'flex-start', marginTop:10,}}>

                        {
                            this.state.messages[i].sendId != this.state.user.createUserId?
                            <View style = {{flexDirection:'row',justifyContent:'flex-start',width:width*0.6,alignItems:'flex-start',}}>
                                <View style ={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source = {{uri:this.state.messages[i].sendAvatar}} style = {{width:50,height:50,borderRadius:5,}}/>
                                    
                                    <View
                                      style = {{	  
                                        width: 0,
                                        height: 0,
                                        backgroundColor: 'transparent',
                                        borderStyle: 'solid',
                                        borderLeftWidth: 5,
                                        borderRightWidth: 5,
                                        borderBottomWidth: 10,
                                        borderLeftColor: 'transparent',
                                        borderRightColor: 'transparent',
                                        borderBottomColor:"white",
                                        transform: [
                                            { rotate: '270deg' }
                                        ],
                                        borderColor:"black",
                                      }}
                                      />
                                

                                </View>

                                <View style = {{borderRadius:10,overflow:'hidden'}}> 
                                        <Text  style = {{
                                                  textAlign:'justify',             
                                                  backgroundColor: "white",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                //   paddingTop:17,
                                                //   paddingBottom:17,
                                                  padding:17,
                                                  fontSize:16,
                                          }}>
                                            {this.state.messages[i].info}
                                        </Text>
                                      </View>

                            </View>
                            :



                            <View style = {{flexDirection:'row',justifyContent:'flex-end',width:width*0.6,alignItems:'flex-start',}}>
                            <View style ={{flexDirection:'row',alignItems:'center'}}>

                            <View style = {{borderRadius:10,overflow:'hidden'}}> 
                                <Text  style = {{
                                            textAlign:'justify',             
                                            backgroundColor: "white",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding:17,
                                            fontSize:16,
                                    }}>
                                    {this.state.messages[i].info}
                                </Text>
                            </View>

                                 <View
                                  style = {{	  
                                    width: 0,
                                    height: 0,
                                    backgroundColor: 'transparent',
                                    borderStyle: 'solid',
                                    borderLeftWidth: 5,
                                    borderRightWidth: 5,
                                    borderBottomWidth: 10,
                                    borderLeftColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderBottomColor:"white",
                                    transform: [
                                        { rotate: '90deg' }
                                    ],
                                    borderColor:"black",
                                  }}
                                  />
                                <Image source = {{uri:this.state.messages[i].sendAvatar}} style = {{width:50,height:50,borderRadius:5,}}/>
                            
                        
                            </View>



                        </View>

                        }    




                    {/* </View> */}

                </View>
            );

        }

        return(
          <View style = {{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
            <ScrollView 

            ref ={component =>this._scrollView = component}
            style = {{backgroundColor:'#DEDEDE',height:this.state.scrollViewHeight}}
            showsVerticalScrollIndicator = {false}
            >
                {messages}
            </ScrollView>



            <KeyboardAvoidingView
            behavior={'height'}
            
              behavior={Platform.OS == "ios" ? "padding" : "height"} style={{
                flex: 1
              }}>

              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{
                    // padding: 20,
                    paddingTop:20,
                    paddingLeft:20,
                    marginBottom:35,
                    
                    flex: 1,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                }}>
                  <TextInput  keyboardType='default' style={{
                    height: 40,
                    borderColor: "#000000",
                    borderBottomWidth: 1,
                    marginBottom: 36,
                    width:width*0.7
                  }}
                  
                  />

                  <TouchableOpacity style = {{width:width*0.2,height:40,backgroundColor:'#fab27b',borderRadius:5}}>
                      <Text style = {{textAlign:'center',color:'white',fontSize:20,marginTop:10}}>
                        发送
                      </Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>


            </KeyboardAvoidingView>


          </View>  
        )
    }
}



// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   KeyboardAvoidingView,
//   ScrollView
// } from 'react-native';

// export default class App extends Component { 
//   render() {
//     return (
// 		<View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior='padding'
//           style={styles.container}
//         >
//           <TextInput
//             underlineColorAndroid={'white'}
//             placeholder='这是一个简单的输入框'
//             style={styles.textInput}
//           />
//         </KeyboardAvoidingView>
// 		</View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:50,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     paddingHorizontal: 20,
//     paddingTop:20
//   },
//   textInput: {
//     borderRadius: 5,
//     borderWidth: 1,
//     height: 140,
//     paddingHorizontal: 10
//   }
// });
