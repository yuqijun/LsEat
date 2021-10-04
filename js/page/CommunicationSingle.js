

import React from 'react'
import {View , Text,DeviceEventEmitter,AppState,AsyncStorage,Image,ScrollView,Dimensions,KeyboardAvoidingView,
  TouchableWithoutFeedback,Platform,StyleSheet,Button,Keyboard,TextInput,TouchableOpacity}  from 'react-native'
import {webSocketConnect , sendMsg} from '../MyWebsocket'
import { connect } from 'react-redux'
const {width,height} = Dimensions.get('window')

import {addMessage} from '../redux/actionCreators'

 class CommunicationSingle extends React.Component{
    

  
    constructor(props){
        super(props)

    // 头像皮卡丘 https://img1.baidu.com/it/u=384997617,326201256&fm=26&fmt=auto         50
    // 卡通头像 萌妹 https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto    41
    this.state = {
    
      scrollViewHeight:height*0.78,
        receiveMsg: {},
        sendMessage:'',
        ws: {},
        user:'',
        receiveId:'',
        messages:[],


        storeUserId:{},    //当前channnl  店铺用户编号
        postmanId:{},      //当前channel  快递员编号
    }
    }




      //键盘弹起后执行
      keyboardDidShow = (e) => {
        this.setState({scrollViewHeight:height*0.78-e.endCoordinates.height+24})
    }
  
      //键盘收起后执行
      keyboardDidHide = () => {
          this.setState({scrollViewHeight:height*0.78})
      }

    async componentDidMount() {


        let _this = this;
        //用户信息
        var keys = ["user"];
        var value =  AsyncStorage.multiGet(keys,function(err,result){
            if(err){
                return;
            } 
              var user =  result[0][1];
              _this.setState({userAddress: JSON.parse(user).receivingAddress,user: JSON.parse(user)})
    
            
             var objUser =  JSON.parse(user);
             _createUserId = objUser.createUserId
             _this.setState({
                 user: objUser
             })

        
            return objUser; 
        })

      //注册监听软键盘弹起和收回
      this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
      this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);


      const { route } = this.props
      //④ 从route对象中获取params对象解构数据
      const {postmanId,userId,storeUserId} = route.params;

      this.setState({
        postmanId: postmanId,
        storeUserId: storeUserId
      })


      //从redux获取所有数据
      const modelData = [
        [
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'hello !','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:05'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'在吗','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:06'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'有点事找你','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:07'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'欠我的两百块什么时候能还我','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:08'},


        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'？？？？？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:09'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'凭本事借的钱为什么要还？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:10'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? ','sendId':'消息发出者的id','receiveAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto','sendAvater':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:11'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'借条都没有，你跟我隔这搁这呢','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:12'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'88 了您呢','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},


        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'你他妈 有种在这里不要走，我现在去摇人','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:14'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','storeAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':'1442751531196878850','info':'妈的','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:15'},

        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'你他妈去阿','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:16'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'老子就在这里等着','sendId':'1442751531196878850',  'sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:17'},
        {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':'1433440289344983041','info':'我要走了就不是东兴乌鸦','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:18'},

    ],






    [
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'你他妈过来啊','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:05'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'你以为我怕你阿','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:06'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'我乌蝇从小到大没怕过谁','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:07'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'你叫谁鱼丸佬','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:08'},


        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'？？？？？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:09'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'你打我我打你有什么意思','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:10'},
   
       
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'很威风吗','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:12'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'过一阵 谁还记得你','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'我耀扬13岁就拿安家费','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},
        
        
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'起码你威过一次','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:14'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','storeAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'你让我威一次行不行'                            ,'sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:15'},

        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'你是不是一定要去','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:16'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'呐，你一定要去我就陪你一起去','sendId':'1442751531196878850',  'sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:17'},
        {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'我给你补枪','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:18'},

    ]
]
        //过滤出当前订单通讯消息
        // var concurrentMessageArray ;
        for(var i = 0 ; i < modelData.length ; i++){
            var temp = modelData[i];
            if(temp[0].postmanId == postmanId &&  temp[0].userId == userId &&  temp[0].storeUserId == storeUserId){
                this.setState({messages: temp})
                return;
            }
        }



       

        
        
        // const {postmanId,userId,storeUserId} = route.params;



      }





     
      componentWillUnmount() {
        // 组件销毁前，移除监听
        // AppState.removeEventListener('change', this.handleAppStateChange);

        //退出时销毁监听
        this.keyboardWillShowListener && this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener && this.keyboardWillHideListener.remove();
      }
    

    render(){

      const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        inner: {
          padding: 24,
          flex: 1,
          justifyContent: "flex-start"
        },
        header: {
          fontSize: 36,
          marginBottom: 48
        },
        textInput: {
          height: 40,
          borderColor: "#000000",
          borderBottomWidth: 1,
          marginBottom: 36
        },
        btnContainer: {
          backgroundColor: "white",
          marginTop: 12
        }
      });

        let messages = [] 
        for (let i = 0; i < this.state.messages.length; i++) {
            messages.push(
                <View style = {{flexDirection:'row', justifyContent: this.state.messages[i].sendId==this.state.user.createUserId?'flex-end':'flex-start', marginTop:10,}}  key={i}>

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
          <View >
            <ScrollView 

            style = {{backgroundColor:'#DEDEDE',height:this.state.scrollViewHeight}}
            showsVerticalScrollIndicator = {false}
            >
                {messages}
            </ScrollView>


            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"} style={{
                flex: 1
              }}>

              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{
                    padding: 24,
                    flex: 1,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                }}>
                  <TextInput  
                    value={this.state.sendMessage}
                    keyboardType='default' style={{
                    height: 40,
                    borderColor: "#000000",
                    borderBottomWidth: 1,
                    marginBottom: 36,
                    width:width*0.7
                  }}

                  onChangeText = {(text) => {
                    this.setState({
                      sendMessage:text
                    })
                  }}

                  
                  />

                  <TouchableOpacity
                   style = {{
                     width:width*0.2,
                     height:40,
                     backgroundColor:'#fab27b',
                     borderRadius:5
                   }}

                   onPress = {()=>{
                    //获取监听此channel 的所有用户编号、发送到消息字符串
                    // console.log("userId ,  postmanId , storeUserId : "+JSON.stringify(this.state.user.createUserId)+"::"+JSON.stringify(this.state.postmanId)+"::"+JSON.stringify(this.state.storeUserId))
                    this.state.sendMessage
                    var receiveUsers = [];
                    receiveUsers.push(this.state.postmanId);
                    receiveUsers.push(this.state.storeUserId)

                    let message = {
                      info: this.state.sendMessage,
                      receiveId: receiveUsers,
                      sendAvatar: this.state.user.avatar,
                      sendId: this.state.user.createUserId
                    }

                    console.log("向本地服务后端发送到 websocket 消息："+JSON.stringify(message))
                    console.log("CommunicationSingle this.props ::"+JSON.stringify(this.props))
                    // this.props.receiveMessage("fdsfsdf")

                    sendMsg(message)
                    

                   }}
                   >
                      <Text  style = {{textAlign:'center',color:'white',fontSize:20,marginTop:10}}>
                    
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
)(CommunicationSingle)