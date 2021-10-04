import { connect } from 'react-redux'
import  { addMessage }  from './redux/actionCreators'
let webSocket ;
let _this = this;
export function webSocketConnect(createUserId,props) {
    //   var websocket = null;
      // var _messages  = this.state.messages

      //判断当前浏览器是否支持WebSocket
      if ('WebSocket' in window) {
          this.websocket = new WebSocket("ws://localhost:8080/websocket/"+createUserId+"?");
      }
  
      this.websocket.onerror = function () {
        console.log("WebSocket连接发生错误");
      };
  
    this.websocket.onopen = function () {
      console.log("WebSocket连接成功");
    }
  
  
      //接收到消息的回调方法
      this.websocket.onmessage = function (event) {


      // let message = {
      //   receiveId: event.data.receiveId,
      //   info: event.data.info,
      //   sendId: event.data.sendId,
      //   sendAvatar: event.data.sendAvatar
      // }  



  

      // 服务端返回信息
      const stringJSON = event.data;
      console.log("MyWebsocket1  将要添加进 容器的消息："+stringJSON)
      console.log(" props :::"+JSON.stringify(_this.props))

      // _this.receiveMessage(event.data)
      props.receiveMessage(event.data)
      
        toRedux();
      }
  
  
        //连接关闭的回调方法
        this.websocket.onclose = function () {
          console.log("WebSocket连接关闭");
        }
    }
  

export function sendMsg(message){
    // console.log("输出用户信息："+JSON.stringify(this.state.user))
    // console.log("发送给服务端的信息:"+JSON.stringify(message))
    this.websocket.send(JSON.stringify(message))

    //清空
}


function toRedux(){
  // console.log(" props :::"+JSON.stringify(this.props))
}





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
)(webSocketConnect)