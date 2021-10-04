
import actionTypes from './actionTypes'
const defaultState = { // 初始化state
  shoppingList:[],
  // 所有商店商品列表
  allGoodsList:[],

  //购物车列表
  shoppingCar:[],

  rightData:[],

  user:'',


  //websocket 消息
  messages:[
    [
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'hello !','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:05'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'在吗','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:06'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'有点事找你','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:07'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'欠我的两百块什么时候能还我','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:08'},


    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'？？？？？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:09'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'凭本事借的钱为什么要还？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:10'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? 有借条吗? ','sendId':'消息发出者的id','receiveAvatar':'https://img0.baidu.com/it/u=3670842587,1860586991&fm=26&fmt=auto','sendAvater':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:11'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'借条都没有，你跟我隔这搁这呢','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:12'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'88 了您呢','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},


    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'你他妈 有种在这里不要走，我现在去摇人','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:14'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','storeAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'妈的','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:15'},

    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'你他妈去阿','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:16'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'老子就在这里等着','sendId':'1442751531196878850',  'sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:17'},
    {'postmanId':'1442751531196878850','storeUserId':'1442751531196878850','userId':'1433440289344983041','storeName':'嗨里捞','sotreAvatar':'https://t8.baidu.com/it/u=3907241022,405589345&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b24685c1ef57cfce7d11a157954618c3','sendName':'惊城武','receiveId':['1442751531196878850','1433440289344983041'],'info':'我要走了就不是东兴乌鸦','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3908738429,2730675850&fm=26&fmt=auto','createTime':'2021-10-13 13:12:18'},

],






[
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'你他妈过来啊','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:05'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'你以为我怕你阿','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:06'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'我乌蝇从小到大没怕过谁','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:07'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'你叫谁鱼丸佬','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:08'},


    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'？？？？？','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:09'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'你打我我打你有什么意思','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:10'},

   
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'很威风吗','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:12'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'过一阵 谁还记得你','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'我耀扬13岁就拿安家费','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:13'},
    
    
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'起码你威过一次','sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:14'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','storeAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'粥润发','receiveId':['1442751531196878850','1433440289344983041'],'info':'你让我威一次行不行'                            ,'sendId':'1433440289344983041','sendAvatar':'https://img2.baidu.com/it/u=2968463111,507881023&fm=26&fmt=auto','createTime':'2021-10-13 13:12:15'},

    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'你是不是一定要去','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:16'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'呐，你一定要去我就陪你一起去','sendId':'1442751531196878850',  'sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:17'},
    {'postmanId':'1442751531196878851','storeUserId':'1442751531196878851','userId':'1433440289344983042','storeName':'蟹黄堡','sotreAvatar':'https://img0.baidu.com/it/u=598728842,2763087848&fm=26&fmt=auto','sendName':'楼德华','receiveId':['1442751531196878850','1433440289344983041'],'info':'我给你补枪','sendId':'1442751531196878850','sendAvatar':'https://img0.baidu.com/it/u=3174781038,2392716425&fm=26&fmt=auto','createTime':'2021-10-13 13:12:18'},

]
]

}

export default (state = defaultState, action) => {

console.log("触发的 actionType ："+JSON.stringify(action))





  var _shoppingCar = [];
  //获取购物车商品数据
  if (action.type === actionTypes.SynchronousShopping) { 
    var _allGoodsList = action.data;
    //遍历所有商品列表，获取购买数量>0的商品
    for(var i = 0 ; i <_allGoodsList.length ; i++){
      if(parseInt(_allGoodsList[i].purchaseQuantity)>0){
        _shoppingCar.push(_allGoodsList[i])
      }
    }
    const _state = JSON.parse(JSON.stringify(state));
    _state.shoppingCar = _shoppingCar;
    console.log("购物车信息："+JSON.stringify(_state.shoppingCar))
    return _state;
  }







  /* 选择的商品信息？ */
  if(action.type===actionTypes.rightData){
    var _rightData = action.data;
    const _state = JSON.parse(JSON.stringify(state))
    _state.rightData = _rightData;
    return _state;
  }

  if(action.type===actionTypes.ShoppingCarToRithtData){
    var  _goods = action.data;
    const _state = JSON.parse(JSON.stringify(state));

    for(var i=0;i<_state.rightData.length ; i++){
      if(_state.rightData[i].goodsId==_goods.goodsId){
      _state.rightData[i].purchaseQuantity = parseInt(_state.rightData[i].purchaseQuantity)-1;
      }
    }

    return _state;


  }


    /* 更新用户信息 */
    if(action.type==actionTypes.updateUserInfo){
      console.log("记录用户信息"+JSON.stringify(action.data))


      const _state = JSON.parse(JSON.stringify(state));
      _state.user=action.data
      return _state;

    }



    //如果监听到 websocket onMessage
    if(action.type  ==  actionTypes.addMessage){
      const _state = JSON.parse(JSON.stringify(state));
      const _messages = _state.messages;
      for(var i =0 ; i < _messages.length; i++){
        var temp =  _messages[i];


        console.log("监听到了 temp[0] ："+JSON.stringify(temp[0].receiveId)+"  ::: action.datt.receiveId: "+JSON.stringify(action.data.receiveId))

        if(temp[0].receiveId == action.data.receiveId){
          temp.unshift(action.data)
          console.log("接收websocket onMessage 新消息后返回的 新消息组："+JSON.stringify(_state.messages))
          return _state; 
        }
      }

    }


  return state



} 