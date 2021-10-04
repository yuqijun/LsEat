import React from 'react'
import {Text, View,FlatList,Dimensions,TouchableOpacity,AsyncStorage,ScrollView,Image} from 'react-native'; 
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {storeApi } from '../../environmental/dev'
const {width,height} = Dimensions.get('window')
const bodyWidth = width*0.96
const contextWidth = width*0.92
export default class OrderDetail extends React.Component {
    constructor(props){
        super(props)

        this.state={
            // data:'',
            data:{
                order:{
                    "orderNo": "1438011986836459521",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000013",
                            "storeId": null,
                            "goodsName": "巴国山鸡煲",
                            "goodsPrice": 69,
                            "goodsAvatar": "https://t11.baidu.com/it/u=686571331,781781066&fm=58",
                            "goodsTotalPrice": 69,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000004",
                            "storeId": null,
                            "goodsName": "南瓜饼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        
                    ],
                    "createTime": "2021-09-15 13:29:09",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 6,
                    "orderPrice": 0,
                    "goodsNumber": 3,
                    "receivingAddress": "江西省景德镇昌江区紫晶路999号 吴彦祖 19847284902",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 9999999,
                    "distributionFee": 6.7,
                    
                }




                ,
                
                "recommendList":[
                {
                    "goodsId": "20000000004",
                    "storeId": null,
                    "goodsName": "南瓜饼",
                    "goodsPrice": 35,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000009",
                    "storeId": null,
                    "goodsName": "白萝卜",
                    "goodsPrice": 35,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000010",
                    "storeId": null,
                    "goodsName": "鸡毛菜",
                    "goodsPrice": 35,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000011",
                    "storeId": null,
                    "goodsName": "蒜香排骨",
                    "goodsPrice": 40,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000012",
                    "storeId": null,
                    "goodsName": "牛肉煲",
                    "goodsPrice": 65,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000013",
                    "storeId": null,
                    "goodsName": "小白菜",
                    "goodsPrice": 20,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                },
                {
                    "goodsId": "20000000015",
                    "storeId": null,
                    "goodsName": "干锅土豆",
                    "goodsPrice": 30,
                    "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                    "goodsTotalPrice": 35,
                    "purchaseQuantity": 1
                }
            ]
        }

       
        }
    }


    // componentDidMount(){
    //     // var _route = this.props.navigation.route;
    //     // const { orderNo } = _route;
    //     // //调用后端接口获取订单信息
    //     // console.log("路由传来的订单编号:"+orderNo) 

    // //③ 从this.props中获取 route对象
    // const {route} = this.props
    // //④ 从route对象中获取params对象解构数据
    // const {orderNo} = route.params;
    // console.log("路由传来的订单编号:"+orderNo) 

    // /* 请求参数包含请求头 */
    // let opt = {
    //     method:'POST',
    //     body:JSON.stringify({
    //     orderNo:orderNo
    // }),
    // headers:{
    //     Accept: "application/json", "Content-Type": "application/json",
    //   }
    // }

    // /* 请求地址 */
    // let url = storeApi + '/api/goods/orderDetail'


    // fetch(url,opt)
    // .then(response =>response.json())
    // .then(json=>{
    //     console.log("进入了 cpm "+JSON.stringify(json.data))
    //     this.setState({
    //         data: json.data
    //     })  
    // })




    // }



    componentDidMount(){
    //③ 从this.props中获取 route对象
    const {route} = this.props
    //④ 从route对象中获取params对象解构数据
    const {orderNo} = route.params;
    console.log("路由传来的订单编号:"+orderNo) 

    const {navigation} = this.props;

    navigation.setOptions({
        tabBarVisible: true,
        display:'none'
      });

    

    /* 请求参数包含请求头 */
    let opt = {
        method:'POST',
        body:JSON.stringify({
        orderNo:orderNo
    }),
    headers:{
        Accept: "application/json", "Content-Type": "application/json",
        }
    }

    /* 请求地址 */
    let url = storeApi + '/api/order/orderDetail'


    fetch(url,opt)
    .then(response =>response.json())
    .then(json=>{
        this.setState({
            data: json.data
        })  
    })



    }
    
    


    render(){
        return(

            // <View>
            //     <Text>
            //         订单详情
            //     </Text>
            // </View>



            <ScrollView 
            style={{flex:1,width:bodyWidth,marginLeft:width*0.02}}
            alwaysBounceVertical = {false}
            showsVerticalScrollIndicator = {false}
            bounces = {false}
            >
                <View>
                 
                 
                    <View style={{backgroundColor:'white',height:height*0.3,flexDirection:'column',
                    justifyContent:'space-around',marginTop:height*0.01,borderRadius:5}}> 
                        <View style={{marginLeft:width*0.02}}>
                            <Text style={{fontSize:18}}>
                                更多优惠推荐
                            </Text>
                        </View>

                        <View>
                            <FlatList 
                             style = {{marginLeft:width*0.02}}
                             bounces = {false}
                             showsHorizontalScrollIndicator = {false}
                             horizontal = {true}
                             data={this.state.data.recommendList}   
                             renderItem={({item})=> 
                             <View style= {{flexDirection:'column',marginRight:width*0.03,justifyContent:'center',alignItems:'center'}}>
                                  <View>
                                  <Image source = {{uri:item.goodsAvatar}} style = {{width:width*0.4,height:width*0.4,borderRadius:6,}}/>
                                  </View>

                                  <View>
                                  <Text style={{fontSize:17}}>
                                      {item.goodsName}
                                  </Text>
                                  </View>

                                  <View style={{flexDirection:'row', justifyContent:'space-between' ,alignItems:'flex-end'}}>  
                                  <Text style = {{fontSize:12}}>
                                    ¥
                                  </Text>
                                  <Text style={{fontSize:16,marginLeft:width*0.005}}>
                                       {item.goodsPrice}
                                  </Text>
                                  </View>
                             </View>
                            }
                            />
                        </View>

                    </View>
                    <View style={{backgroundColor:'white',flex:1,width:bodyWidth,marginTop:height*0.01,flexDirection:'column',alignItems:'center',borderRadius:7}}> 
                        <View style={{width:contextWidth,height:height*0.06,flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{fontSize:16,marginLeft:width*0.02}}>
                                {this.state.data.order.storeName}
                            </Text>
                        </View>
                        <View style = {{width:bodyWidth,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:contextWidth, backgroundColor:'#DEDEDE',height:0.5}}

                                />
                        </View>
                        <FlatList 
                        style = {{width:contextWidth}}
                        data = {this.state.data.order.goodsList}
                        renderItem={({item})=> 
                        <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:width*0.03}}>
                            <Image source = {{uri:item.goodsAvatar}} style = {{width:80,height:80,borderRadius:6,}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-between',width:contextWidth-80
                        }}>
                                <Text style={{paddingLeft:width*0.02}}>
                                    {item.goodsName}
                                </Text>
                                <Text style = {{paddingRight:width*0.02}}>
                                    {item.goodsPrice}
                                </Text>
                            </View>
 
                        </View>
                        }/>

                        <View style = {{width:bodyWidth,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:width*0.03}}>
                                <View style={{width:contextWidth, backgroundColor:'#DEDEDE',height:0.5}}

                                />
                        </View>

                        <View style ={{marginTop:width*0.03,flexDirection:'column',width:bodyWidth,alignItems:'center',borderRadius:7}}>
                            <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style= {{fontSize:15}}>
                                    打包费
                                </Text>
                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                    <Text style ={{fontSize:15}}>
                                         ¥
                                    </Text>
                                    <Text style={{fontSize:17}}>
                                        {this.state.data.order.packageFee}
                                    </Text>
                                </View>
                            </View>

                            <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between',paddingBottom:width*0.05}}>
                                <Text style= {{fontSize:15}}>
                                    配送费
                                </Text>
                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                    <Text style ={{fontSize:15}}>
                                         ¥
                                    </Text>
                                    <Text style={{fontSize:17}}>
                                        {this.state.data.order.distributionFee}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{borderRadius:7 ,backgroundColor:'white',width:bodyWidth,marginTop:height*0.01,flex:1,
                flexDirection:'column',alignItems:'center',paddingBottom:width*0.03
                }}> 
                        <View style = {{width:contextWidth,height:height*0.06,flexDirection:'column',justifyContent:'center'}}>
                            <Text style = {{fontSize:16}}>
                                配送信息
                            </Text>
                        </View>

                        <View style = {{width:bodyWidth,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:contextWidth, backgroundColor:'#DEDEDE',height:0.5}}
                                />
                        </View>

                        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:width*0.03,alignItems:'center',width:contextWidth, }}>
                            <Text style={{color:'#808080'}}>
                                期望时间
                            </Text>

                            <Text>
                                立即配送
                            </Text>
                        </View>

                        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:width*0.03,width:contextWidth, }}>
                            <Text style ={{color:'#808080'}}>
                                配送地址
                            </Text>

                            <Text style = {{width:width*0.5}}>
                               {this.state.data.order.receivingAddress}
                            </Text>
                        </View>

                        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:width*0.03,width:contextWidth, }}>
                            <Text style = {{color:'#808080'}}>
                                配送服务
                            </Text>

                            <Text>
                               快鸡急送
                            </Text>
                        </View>


                        <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:width*0.03,width:contextWidth, }}>
                            <Text style = {{color:'#808080'}}>
                                配送骑手
                            </Text>

                            <Text>
                               {this.state.data.order.postmanName}
                            </Text>
                        </View>

                        <View style ={{width:contextWidth,flexDirection:'row',justifyContent:'center'}}>
                            
                            <View style = {{width:contextWidth/2 , flexDirection:'row',justifyContent:'center',alignItems:'center',borderRightWidth:0.5,borderRightColor:'#DEDEDE'}}>
                                <Button 
                                onPress = {()=>{
                                    const {navigation} = this.props;
                                    // navigation.navigate('Home');
                                    navigation.navigate('socket',{'postmanId':this.state.data.order.postmanId});
                                }}
                                type="clear"
                                icon={
                                    <Icon
                                    name="comment"
                                    size={25}
                                    // color='#fab27b'
                                    color = '#696969'
                                    />
                                    }
                                />

                                <Text style ={{fontSize:17}}>
                                    联系骑手
                                </Text>

                            </View>

                            <View style = {{width:contextWidth/2 , flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Button 
                                type="clear"
                                icon={
                                    <FeatherIcon
                                    name="phone-call"
                                    size={20}
                                    // color='#fab27b'
                                    color = '#696969'
                                    />
                                    }
                                />

                                <Text style ={{fontSize:17}}>
                                    致电骑手
                                </Text>
                            </View>
                        </View>




                    </View>



                    <View style = {{width:bodyWidth,backgroundColor:'white',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:height*0.01,marginBottom:width*0.03}}>
                        {/* <View style={{width:contextWidth,height:height*0.06,flexDirection:'column',justifyContent:'cente',marginTop:width*0.03, }}> */}
                        <View style={{width:contextWidth,flexDirection:'column',justifyContent:'cente',marginTop:width*0.03, }}>
                            <Text style = {{fontSize:16}}>
                                订单信息
                            </Text>
                        </View>
                        <View style = {{width:bodyWidth,flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:width*0.03,}}>
                                <View style={{width:contextWidth, backgroundColor:'#DEDEDE',height:0.5}}

                                />
                        </View>


                        <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between',marginTop:width*0.03,}}>
                            <Text style ={{color:'#808080'}}>
                              订单号码
                            </Text>
                            <Text>
                                {this.state.data.order.orderNo}
                            </Text>
                        </View>

                        <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between',marginTop:width*0.03,}}>
                            <Text style = {{color:'#808080'}}>
                              下单时间
                            </Text>
                            <Text>
                                {this.state.data.order.createTime}
                            </Text>
                        </View>

                        <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between',marginTop:width*0.03,}}>
                            <Text style = {{color:'#808080'}}>
                              支付方式
                            </Text>
                            <Text>
                                在线支付
                            </Text>
                        </View>

                        
                        <View style = {{width:contextWidth,flexDirection:'row',justifyContent:'space-between',marginTop:width*0.03,marginBottom:width*0.03,}}>
                            <Text style = {{color:'#808080'}}>
                              餐具数量
                            </Text>
                            <Text>
                                商家按餐量提供
                            </Text>
                        </View>


                    </View>
                
                </View>
            </ScrollView>









        )
    }
}