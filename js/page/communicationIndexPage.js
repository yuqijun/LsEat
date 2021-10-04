import React from 'react'
import {Text, View,FlatList,Dimensions,Image,TouchableOpacity}  from 'react-native'
const {width,height} = Dimensions.get('window')
const bodyWidth = width*0.96;
const contentWidth = width*0.92
export default class CommunicationIndexPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[
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
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'我耀扬13岁拿安家费','sendId':'消息发出者的id','receiveAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto','sendAvater':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:11'},
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'很威风吗','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:12'},
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'过一阵 谁还记得你','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},
    
    
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'起码你威过一次','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:14'},
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','storeAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':'1442751531196878850','info':'你让我威一次行不行'                            ,'sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:15'},
    
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'你是不是一定要去','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:16'},
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'呐，你一定要去我就陪你一起去','sendId':'1442751531196878850',  'sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:17'},
                {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':'1433440289344983041','info':'我给你补枪','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:18'},
    
            ]
        ]
        }
    }

    render(){
        const {navigation} = this.props;
        return(
            <View style = {{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <FlatList  
                bounces= {false}
                data = {this.state.data}
                renderItem={({item,index})=>
                

            <TouchableOpacity onPress = { ()=>{
                
                let param ={
                    'storeAvatar':this.state.data[0].sotreAvatar,
                    'storeName':item[item.length-1].storeName,


                    'userId':item[item.length-1].userId,
                    'storeUserId':item[item.length-1].storeUserId,
                    'postmanId':item[item.length-1].postmanId,
                }
                console.log("点击了 View  元素 穿过去的元素"+param.postmanId,+"::"+param.userId+"::"+param.storeUserId)
                navigation.navigate('communicationSingle',param)
            } }>

                <View style ={{width:bodyWidth,backgroundColor:'white',borderRadius:7,flexDirection:'column',alignItems:'center',marginTop:width*0.02}}>
                    <View  style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:width*0.02,width:contentWidth}}>
                        <View style= {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Image 
                            source={{uri:item[item.length-1].sendAvatar}}
                            style = {{width:width*0.12,height:width*0.12,borderRadius:5}}
                            />
                            <View style = {{marginLeft:width*0.02}}>
                                <Text style = {{fontSize:16,fontWeight:'bold'}}>
                                    {item[item.length-1].sendName}
                                </Text>
                            </View>
                        </View>
                        
                        <View>
                            <Text style = {{color:'#808080'}}>
                                {item[item.length-1].createTime}
                            </Text>
                        </View>

                    </View>
                    
                    <View style = {{width:contentWidth,marginTop:width*0.02,marginBottom:width*0.02}}>
                        <View>
                            <Text style = {{fontSize:17}}>
                                {item[item.length-1].info}
                            </Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>



            }



           
                />
                
            </View>



        )
    }
}