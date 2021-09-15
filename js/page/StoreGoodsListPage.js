// import  React   from 'react';
// import { AsyncStorage,View, Text , Image,Dimensions,FlatList,TouchableOpacity,TouchableHighlight,StyleSheet,Animated} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { Button , Overlay,Input,CheckBox} from 'react-native-elements';
// import {storeApi , userApi} from '../environmental/dev'
// import styles from '../css/StoreGoodsListPageCss';

// const {width,height} = Dimensions.get('window')
// let shoppingCarListElementLength = 0
// // let shoppingCarListElementLength =-70
// export default class StoreGoodsListPage extends React.Component{

//   /* 左侧FlastList key */
//   _left_extraUniqueKey(item ,index){
//     return "left"+index+item;
//   }
//   /* 右侧FlastList key */
//   _right_extraUniqueKey(item ,index){
//     return "right"+index+item;
//   }

//   _drawer_extraUniqueKey(item,index){
//     return "drawer"+item;
//   }

//   /* 构造函数 */
//   constructor(props){
//     super(props)
//     this.state = {

//       choiceCheckBox:null,

//       data: [] ,

//       bottomDrawerFlag: true,

//       addressDrawerFlag: false,

//       //购物车
//       shoppingCars: [] ,

//       //打开开关
//       drawerFlag:false,
      
//       translateValue: new Animated.ValueXY({x:0, y:shoppingCarListElementLength}),

//       translateAddressValue: new Animated.ValueXY({x:0,y:340}),

//       modalVisible: false,

//       groupLength:0,

//       leftData:[],
//       /* 右侧数据 */
//       rightDatas:[],

//       /* 左侧下标 key ， 右侧分组高度范围 */
//       section:[],

//       /* map结构 分组 */
//       sectionTo: null ,

//       lefDataItemBackgroundColor:'#fcaf17',

//       /* 左侧item 激活标记,默认第一个 */
//       currentActive: 0,

//       /* 默认上一个item */
//       pre:-1,
      
//       /* 默认下一个item */
//       next:1,

//       /* 商品列表 */
//       shoppingList:[],

//       /* 默认抽屉是否打开 */
//       openDrawer:false,

//       /* 当前商店编号 */
//       storeId:'',

//       /* 当前商店名称 */
//       storeName:'',

//       /* 当前商店电话 */
//       storeTelephone:'',

//       // /* 订单收货地址 */
//       // choiceAddress :'',

//       // clientAddress:'',

//       userAddress:'',

//       user :'',

//       /** 编辑收货地址覆盖组件开关 */
//       isEditAddress:false,

//       /* 修改的收货地址 */
//       changedAddress:'江西省景德镇昌江区紫晶路1920号',

//       /* 修改的客户名称 */
//       changedUserName:'吴彦祖',

//       /* 修改的联系电话 */
//       changedPhone:'19847284902',

//       /* 要改变的地址信息 */
//       item:'',


//       /* 选择收货地址确认按钮显示开关 */
//       isShowConfirm:true,

//       /* 付款按钮显示开关 */
//       isPayment:true,

//       /* 详情按钮显示开关 */
//       isDetail:false

//     }
//   }


//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }


//   /* 获取指定商店所有商品信息 */
//   componentDidMount(){

//     var _this = this;

//     var keys = ["user"];
//     AsyncStorage.multiGet(keys,function(err,result){
//         if(err){
//             console.log('AsyncStorage 获取保存的登陆用户信息时发生异常')
//             return;
//         } 
//           var user =  result[0][1];
//           _this.setState({userAddress: JSON.parse(user).receivingAddress,user: JSON.parse(user)})


//          var objUser =  JSON.parse(user);
//          var map = new Map();
//          for(var i = 0 ; i < objUser.receivingAddress.length; i++){
//            var obj = objUser.receivingAddress[i];
//            var key = obj.address+obj.userName+obj.phone

//            map.set(key,false);
//          }

//           _this.setState({choiceCheckBox:map})
//           return; 
//     })


//   const {route} = this.props;
//   const {storeId} = route.params;
//   const {storeName} = route.params;
//   const {telephone} = route.params;

//   /* 请求参数包含请求头 */
//   let opt = {
//     method:'POST',
//     body:JSON.stringify({
//       storeId:storeId
//     }),
//     headers:{
//         Accept: "application/json", "Content-Type": "application/json",
//       }
//     }

//     /* 请求地址 */
//     let url = storeApi + '/api/goods/storeGoodsList'

//     fetch(url,opt)
//     .then(response =>response.json())
//     .then(json=>{
//       data = json.data;
//       var _rightData = [];
//       var _leftData = [];
//       var _section = [];
//       var pre = 0;
//       var count = 1;

//       var sectionMap = new Map();

//       for(var i=0;i<data.length;i++){
//         const {title,goodsList} = data[i];
    
//         let _section_childer = {
//         index:i,
//         startItem:pre<=0?0:pre+1,
//         endItem:goodsList.length+pre
//         }
//         _section.push(_section_childer);
//         for(var j=0;j<goodsList.length;j++){
//         count = count+1;
//         sectionMap.set(count,i);

//         _rightData.push(goodsList[j])

  
//         }
//         _leftData.push(title);
//         pre = goodsList.length+pre
//       }

//       sectionMap.forEach(function (item) {
//         console.log("分组item ："+item.toString());
//         });


    

//       this.setState({
//           rightDatas: _rightData,
//           leftData: _leftData,
//           section: _section,
//           sectionTo: sectionMap,
//           stordId:storeId,
//           storeName:storeName,
//           storeTelephone: telephone,
//       })
//     })
//   }



//   /* 监听右侧商品列表滑动浮动，改变左侧相应的商品分组样式 */
//   _on_right_Scroll=(changed)=>{

//     // 右侧当前滑动所在位置
//     var currentRightItem = changed.viewableItems[0].index+1;
//     var _sectionTo = this.state.sectionTo;
//     var index = 0;
//     var mark = false;
//     _sectionTo.forEach(function(key,value){
//       if(mark){
//         return;
//       }

//       if(currentRightItem==value){
//           index = key;
//           mark = true;
//       }
//     })
//     index = parseInt(index);
//     this.refs.leftScroll.scrollToIndex({animated: true, index:index})
//     this.setState({
//       currentActive:index,
//       pre:index-1,
//       next:index+1
//     })


//     /** changed是消失在, changed中 有个changed 对象 其中有个isViewable属性，为true/false值 描述是出现在屏幕还是消失于屏幕 */
//     // console.log("当前滚动触发信息："+JSON.stringify(changed))

//     if(changed.changed.isVisible==true){
//       var newItem = changed.changede;
//     }



//   }

//   // 提供一个open 方法让隐藏的购物车元素完整的展现出来
//   _openBottomDrawer(){

//     // this.setState({openDrawer: true})

//     /* 屏蔽详情显示 支付按钮 */
//     this.setState({isDetail:true,isPayment:false})

//     Animated.spring(this.state.translateValue,
//       {
//           toValue: {x:0, y:-((height*0.4+80))},    //目标值
//           velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//           tension: 25,               //控制速度。默认值40。
//           friction: 10,                //控制“弹性”/过冲。默认值7。
//       }).start();
// }

// // 提供一个 close 方法关闭购物车抽屉
// _closeBottomDrawer(){
//   // this.setState({openDrawer:!this.state.openDrawer})
//   /* 屏蔽结算和确认按钮 显示详情按钮 */
//   this.setState({isPayment:true,isShowConfirm:true,isDetail:false})
//   Animated.spring(this.state.translateValue,
//     {
//         toValue: {x:0, y:((height*0.4))},    //目标值
//         velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//         tension: 25,               //控制速度。默认值40。
//         friction: 7,                //控制“弹性”/过冲。默认值7。
//     }).start();
// }




//   // 提供一个open 方法让隐藏的收货地址元素完整的展现出来
//   _openAddressBottomDrawer(){

//     this.setState({bottomDrawerFlag: !this.state.bottomDrawerFlag})

//     /* 反转isShowConfim 和  isPayment 状态 */
//     this.setState({isShowConfirm:!this.state.isShowConfirm,isPayment:!this.state.isPayment})


//     Animated.spring(this.state.translateAddressValue,
//       {
//           toValue: {x:0, y:0},    //目标值
//           velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//           tension: 25,               //控制速度。默认值40。
//           friction: 10,                //控制“弹性”/过冲。默认值7。
//       }).start();
// }

// // 提供一个 close 方法关闭收货地址
// _closeAddressBottomDrawer(){

//   Animated.spring(this.state.translateAddressValue,
//     {
//         toValue: {x:0, y:((height*0.4)-60)},    //目标值
//         velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//         tension: 25,               //控制速度。默认值40。
//         friction: 7,                //控制“弹性”/过冲。默认值7。
//     }).start();
// }

//   /* 刷新购物车 - ,+ */
//   refreshPurchaseQuantitied=(item,flag)=>{
//       if(flag == "+"){
//         this._changeGoodsList(item,flag);
//         }else{
//         this._changeGoodsList(item,flag);        
//         return ;
//         }
//       return ;
  
//   }

//   /** 
//    * 清空购物车
//   */
//   _clearShoppingCars(){
//     /*  this.state.shoppingCars 的value置为null */
//     this.setState({shoppingCars:''})
//   }
  

//   /* 向购物车中添加商品 */
//   _addToShoppingCar(item){
//     this.state.shoppingCars.push(item);
//     this.setState({shoppingCars: this.state.shoppingCars});
//   }

//   /* 在购物车中删除商品 */
//   _deleteOnShoppingCar(item){
//     for(var i = 0 ; i <  this.state.shoppingCars.length ; i++){
//       if(this.state.shoppingCars[i].goodsName == item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
//         this.state.shoppingCars.splice(i,1);
//         this.setState({shoppingCars: this.state.shoppingCars});
//       }
//     }
//   }

//   /** 改变商品列表选中的数量 
//    * itme 商品
//    * flag 标记 + or -
//   */
//   _changeGoodsList(item,flag){

//     if(flag == "-"){
//       this._reduce(item);
//       return ;
//     }


//     if(flag == "+"){
//       this._increase(item);
//       return;
//     }
//   }


//   /**
//    *  商品列表(this.state.rightDatas)减少选中数量
//    *  item 商品元素
//   */
//   _reduce(item){
//     for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//       if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId && this.state.rightDatas[i].purchaseQuantity>0){
//         this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity - 1;
//         this.setState({rightDatas: this.state.rightDatas})



//         var tempShoppingCar = [];
//         for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//           if(this.state.rightDatas[i].purchaseQuantity>0){
//             tempShoppingCar.push(this.state.rightDatas[i])
//           }
//         }
//         this.setState({shoppingCars: tempShoppingCar})
//       }
//     }
//   }

//   /** 
//    *  商品列表（this.state.rightDatas）增加选中数量
//    *  item 商品元素
//   */
//    _increase(item){
//     for(var i = 0 ; i < this.state.rightDatas.length ; i++){  
//       if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId){
//         this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity + 1;
//         this.setState({rightDatas: this.state.rightDatas})
//             var tempShoppingCar = [];
//             for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//               if(this.state.rightDatas[i].purchaseQuantity>0){
//                 tempShoppingCar.push(this.state.rightDatas[i])
//               }
//             }
//             this.setState({shoppingCars: tempShoppingCar})
//         return;
//       }
//     }


//    }


//    /**
//     *  改变购物车（this.state.shoppingCar）商品选择数量
//     * 
//     */
//    _changeShoppingCar(item,flag){
//     if(flag == "-"){
//       this._reduce2(item)
//       return ;
//     }


//     if(flag == "+"){
//       this._increase2(item);
//       return ;
//     }
//      return ;
//    }

//    /** 
//     * 减少购物车(this.state.shoppingCar)商品选中数量
//     *  item 减少的商品信息
//     */
//    _reduce2(item){
//     for(var i = 0  ; i <  this.state.shoppingCars.length ; i++){
//       if(this.state.shoppingCars[i].goodsId == item.goodsId &&  this.state.shoppingCars[i].goodsName == item.goodsName){
        
        
//         /** 如果本轮商品列表中的商品数量已经为一那么这次则删除该商品 */ 
//         if(this.state.shoppingCars[i].purchaseQuantity == 1){
//           this.state.shoppingCars.splice(i,1);
//         }else{
//           this.state.shoppingCars[i].purchaseQuantity =  this.state.shoppingCars[i].purchaseQuantity - 1;
//         }
//         this.setState({shoppingCars: this.state.shoppingCars}) 


//         return ;
//       }
//     }
//    }

//    /**
//     *  购物车（this.state.shoppinCar）增加选中商品数量
//     *  item 增加到商品信息
//     */

//     _increase2(item){
//       /** 是否是第一次向购物车添加商品 */
//       if(this.state.shoppingCars.length < 1){
//         this.state.shoppingCars.push(item);
//         this.setState({shoppingCars: this.state.shoppingCars})
//         return ;
//       }


//       /** 是否是第一次向购物车添加这款商品 */
//       for(var i = 0 ; i < this.state.shoppingCars.length ; i++){
      
//         if(this.state.shoppingCars[i].goodsName = item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
//           this.state.shoppingCars[i].purchaseQuantity = this.state.shoppingCars[i].purchaseQuantity + 1;
//           this.setState({shoppingCars: this.state.shoppingCars})
//           return ;
//         }
//       }


//       this.state.shoppingCars.push(item);
//       this.setState({shoppingCars: this.state.shoppingCars})
//     }


//     _choiceAddress(item){
//       var addressInfo  = null;
//       addressInfo = item.address+" "+item.userName+" "+item.phone

//       //关掉其他的选中 , 这时候 this.state.choiceAddress肯定是有值的，它可作为key （这作为优化点，此处选择for循环）
//       for(var key  of this.state.choiceCheckBox.keys()){
//         this.state.choiceCheckBox.set(key,false);
//       }

//       //获取this.state.choiceCheckBox 中的key 设置为true,并且将其他的设置为false
//       this.state.choiceCheckBox.set(item.address+item.userName+item.phone,true)

//       this.setState({choiceAddress: addressInfo,choiceCheckBox:this.state.choiceCheckBox,isShowConfirm:false})

//     }

//     /** 
//      * 付款
//      * 判断必填参数
//      *   */ 
//     _payment(){



//       if(null ==this.state.shoppingCars || this.state.shoppingCars.length<1){
//         return ;
//       }

//       const {route} = this.props;

//       if(this.state.choiceAddress == ''){
//         alert("缺少客户地址")
//       }

//       if(this.state.storeName==''){
//         alert("缺少商店名")
//       }

//       if(this.state.storeTelephone==''){
//         alert("缺少商店联系电话")
//       }

//       var createUserId = '1000001';
//       var goodsList = this.state.shoppingCars;
//       var storeName = this.state.storeName;
//       var storeTelephone = this.state.storeTelephone;
//       var goodsNumber = 0 ;

//       /* 计算商品总数量 */
//       for(var i = 0 ; i < goodsList.length ; i++){
//         goodsNumber = goodsNumber+goodsList[i].purchaseQuantity;
//       }

//       var receivingAddress = this.state.choiceAddress;

//       var paymentMethod = 1;

//       var tablewareNumber = '商家提供餐具'

//       /* 发送请求至支付API */
//       /* 请求参数包含请求头 */
//       let opt = {
//         method:'POST',
//         body:JSON.stringify({
//           createUserId:createUserId,
//           goodsList,goodsList,
//           storeName:storeName,
//           storeTelephone:storeTelephone,
//           goodsNumber:goodsNumber,
//           receivingAddress:receivingAddress,
//           paymentMethod:paymentMethod,
//           tablewareNumber:tablewareNumber,
//         }),
//         headers:{
//             Accept: "application/json", "Content-Type": "application/json",
//           }
//         }

//         /* 请求地址 */
//         let url = storeApi + '/api/order/add'
//         fetch(url,opt)
//         .then(response =>response.json())
//         .then(json=>{
//           data = json.data;
//           if(json.code==1){
//             /* 将购物车抽屉关闭，清空购物车 */
//             this._closeBottomDrawer();
//             this.setState({shoppingCars:null})
            
//           }
//           console.log("支付接口返回结果"+JSON.stringify(json))
//         }).catch(error => console.error('Error:', error))

//     }


//     /**  编辑收货地址 
//      * 
//      *   item 为原来收货地址信息 address ， userName, phone
//      *   change 为要改变的地址信息
//     */
//     _editAddress(item,change){
//       var _userId = this.state.user.createUserId;
//       //userAddress  找到指定的元素删除 ，然后在添加新编辑的元素
//       for(var i  = 0 ; i < this.state.userAddress.length ; i++){
//         var obj = this.state.userAddress[i];
//         if(item.address  == obj.address  && item.userName == obj.userName && item.phone == obj.phone){
//           this.state.userAddress.splice(i,1);
//         }
//       }
//       this.state.userAddress.unshift(change);
//             /**  在服务器上更新用户的收货地址信息,请求成功再去修改前端 */
//             let opt = {
//               method:'POST',
//               body:JSON.stringify({
//                 createUserId: _userId,
//                 receivingAddress: this.state.userAddress
//               }),
//               headers:{
//                   Accept: "application/json", "Content-Type": "application/json",
//                 }
//               }
          
//               /* 请求地址 */
//               let url = userApi + '/api/user/update'
          
//               fetch(url,opt)
//               .then(response =>response.json())
//               .then(json=>{
//                 data = json.data;
//                 /* 判断请求服务API是否成功，如果成功了就改变 state.userAddress  */
//                 if(json.code == 1){
//                   this.setState({userAddress:this.state.userAddress,isEditAddress: false})
//                   //choiceCheckBox
//                   this._initUserAddress(this.state.userAddress)
//                   alert(json.msg)
//                 }else{
//                   alert(json.msg)
//                 }
//               })



//     }


    

//   _updatUserAddress(objUser){
//     var map = new Map();
//     for(var i = 0 ; i < objUser.receivingAddress.length; i++){
//       var obj = objUser.receivingAddress[i];
//       var key = obj.address+obj.userName+obj.phone
//       map.set(key,false);
//     }

//      _this.setState({choiceCheckBox:map})
//   }

//   /** 
//    * 初始化用户收货地址
//   */
//   _initUserAddress(userAddress){
//     var map = new Map();
//     for(var i = 0 ; i < userAddress.length; i++){
//       var obj = userAddress[i];
//       var key = obj.address+obj.userName+obj.phone
//       map.set(key,false);
//     }
//     this.setState({choiceCheckBox:map})
//   }
    

//   /**
//    * 选择收货地址
//    *  */  

//   _confim(){
//     /* 返回购物车页面 */
//     /* 屏蔽确定和详情按钮， 显示结算按钮 */

//     this.setState({bottomDrawerFlag: true,isShowConfirm:true,isDetail:true,isPayment:false})
//   }


//   /* 视图 */
//   render(){
//     const {width,height} = Dimensions.get('window')
//     var leftSideWidth = width*(1/5);
//     var rightSidiWidth = width*(4/5);
//     var rightSideTextWidth = rightSidiWidth-120-15;


    
//       return(
//         <View style={{flex:1,width:width,flexDirection:"row",flexWrap:'wrap'}}>
//           {/* 左侧商品分组FlastList */}
//           <View  style={{ width:leftSideWidth,borderWidth:0.1,borderColor:'#D3D3D3',height:height-170} }>
//               <FlatList
//               showsVerticalScrollIndicator = {false}
//               ref = 'leftScroll'
//               keyExtractor = {this._left_extraUniqueKey}
//               data = {this.state.leftData}
//               renderItem={({item,index})=>
//                   <View style={ this.state.currentActive==index?styles.activetLeftItem:
//                   index==this.state.pre?styles.pre_Item:
//                   index==this.state.next?styles.next_item:styles.defaultLeftItem
//                   }>
//                       <Text>
//                         {item}
//                       </Text>
//                   </View>
//               }
//               >
//               </FlatList>
//           </View>
//           {/* 右侧商品FlastList */}
//           <View style={{width:width*(4/5),height:height-170}}>
//               <FlatList 

//             alwaysBounceHorizontal = {false}
//             overScrollMode = {'never'}


//               bounces = {false}
//               showsHorizontalScrollIndicator= {false}
//               showsVerticalScrollIndicator = {false}
//               keyExtractor = {this._right_extraUniqueKey}
//               onViewableItemsChanged = {this._on_right_Scroll}
//               data = {
//                   this.state.rightDatas
//               }
//               renderItem={
//                 ({item})=>
//                 <View style = {{flexDirection:"row",flexWrap:"wrap",marginBottom:30,height:height*0.15,alignItems:'center'}}>
//                     <Image source = {{uri:item.goodsAvatar}} style = {{width:width*0.3,height:height*0.15,borderRadius:10,marginLeft:5}}/>
//                     {/* 右侧文本信息盒子 */}
//                     <View style={{width:rightSideTextWidth,flex:1,flexDirection:'column',justifyContent:'space-between'}}>
                     
//                      <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',}}>
                     
//                       {/* 商品名称 */}
//                       <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15}} >
//                       {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
//                       {item.goodsName}
//                       </Text>
//                       {/* 商品描述 */}
//                       <View style={{marginLeft:15}}>
//                         <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
//                             {item.goodsDescription}
//                         </Text>
//                       </View>
//                       {/* 商品月销 */}  
//                       <View style={{flexDirection:"row",marginLeft:15,}}> 
//                         <Text>
//                             月售 {item.goodsSalesVolume}
//                         </Text>
//                       </View>
//                       </View>


                    
//                     {/* 商品价格   商品加、减 控件 */}
//                      <View style={{flexDirection:"row",marginLeft:15,flex:1,alignItems:'flex-end',borderColor:'red',borderWidth:1}}>
//                         {/* 商品价格 */}
//                         <Text style={{fontSize:15,fontWeight:"bold"}}>
//                           ¥ {item.goodsPrice}
//                         </Text>
//                         {/* 商品减少、增加控件 */}
//                         <View style={{marginLeft:50,flex:1,flexDirection:"row",alignItems:'flex-end'}}>
//                             {/* 商品减少按钮 */}
//                             <Button
//                             style={{borderColor:'red',borderWidth:1,marginTop:width*0.07}}
//                             type="clear"
//                             onPress={()=>{this.refreshPurchaseQuantitied(item,"-")}}
//                             icon={
//                                 <Icon
//                                 name="minuscircle"
//                                 size={20}
//                                 color='#fab27b'
//                                 />
//                                 }
//                             />
//                             {/* 单品选择数量 */}
//                             <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
//                             {/* 单品增加按钮 */}
//                             <Button
//                             type="clear"
//                             onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
//                             icon={
//                                 <Icon
//                                 name="pluscircle"
//                                 size={20}
//                                 // color='#0000ff'
//                                 color = '#fab27b'
//                                 />
//                                 }
//                             />
//                         </View>
//                     </View>
                
                
//                     </View>
//                   </View>
//               }>
//             </FlatList>
//         </View>    
        

      
//       <View style={{width:width,height:40,shadowColor: "black",zIndex:2,backgroundColor:'white'}}>
      
        
//         {/* 分割线  以下三个按钮是根据不同的页面显示不同的按钮并且实现不同的功能 */}
//         <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>

//         <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isDetail}} 
//           onPress={() => {this._openBottomDrawer();}}>
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
//             详情
//           </Text>
//         </TouchableOpacity>


//         <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isPayment}} 
//           onPress={() => {
//             //结算函数
//             this._payment()
//           }}
            
//         >
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
//             结算
//           </Text>
//         </TouchableOpacity>


//         <TouchableOpacity  style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isShowConfirm}}
//           onPress={()=>{this._confim()}}
//         >
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>
//             确定
//           </Text>

//         </TouchableOpacity>


//       </View>



//     {/* 编辑收货地址 */}
//     <Overlay isVisible={this.state.isEditAddress}>
//       <View style={{width:width*0.8,height:height*0.4,flexDirection:'column',flexWrap:'wrap',borderRadius:20,justifyContent:'center'}}>
//         {/* <Text>开始编辑收货地址吧</Text> */}
//         <Input
//           placeholder="收货地址"
//           value = {this.state.changedAddress}
//           onChangeText={ value=>this.setState({changedAddress: value})}
//           // leftIcon={{ type: 'font-awesome', name: 'comment' }}
//           style={{width:width*0.7}}
//           // onChangeText={value => this.setState({ comment: value })}
//           />

//         <Input
//           placeholder="客户名称"
//           style={{width:width*0.7}}
//           value = {this.state.changedUserName}
//           onChangeText={ value=>this.setState({changedUserName: value})}
//           />


//         <Input
//           placeholder="联系电话"
//           onChangeText={ value=>this.setState({changedPhone: value})}
//           style={{width:width*0.7}}
//           value = {this.state.changedPhone}
//           />

        
//         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
//         <Button title="确定" 
//           style={{width:width*0.25}}
//           onPress={
//             ()=>{
//               // alert("点击了确定编辑收货地址按钮")
            
//               let  change = {
//                 'address':this.state.changedAddress,
//                 'userName':this.state.changedUserName,
//                 'phone':this.state.changedPhone
//               }
//               this._editAddress(this.state.item,change);
//             }
//           }
//           />

//           <Button title="取消" 
//           style={{width:width*0.25}}
//           onPress={
//             ()=>{
//               this.setState({isEditAddress: false})
//             }
//           }
//           />
//          </View>
//       </View>      
//     </Overlay>


//       <Animated.View style={{backgroundColor:'#f6f5ec',height:400,transform:[{translateX:0},{translateY:this.state.translateValue.y}],
//       borderTopLeftRadius:15,borderTopRightRadius:15,zIndex:1,
//       }} >
//             <TouchableOpacity 
//             style={{borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#FFDEAD',height:24}}
//               onPress={() => {
//               this._closeBottomDrawer();
//               }}
//             >        
//               <Text style={styles.tips}>
//                 购买列表
//               </Text>
//           </TouchableOpacity>


//           {/* 清空购物车div */}
//           <View style={{backgroundColor:'white',flex:1,flexDirection:'column',flexWrap:'wrap'}}>
//             <View style={{flex:1,flexDirection:'column',flexWrap:'wrap',width:width*0.4,marginLeft:width*0.75}}>
//               <Button style={{width:width*0.1,marginTop:-2}}

//               onPress={()=>{
//                 this._clearShoppingCars();
//               }}

//               type='clear'
//                   icon={
//                     <Icon
//                     name="delete"
//                     size={10}
//                     color='#919191'
//                     />
//                     }
//               />
//               <View style={{borderColor:'red',width:width*0.3,marginTop:7}}>
//                 <Text style={{fontSize:10,color:'#919191'}}>
//                   清空购物车
//                 </Text>
//               </View>
//             </View>
//             <View 
//               style = {{height:0.09,backgroundColor:'#DEDEDE'}}
//             />
//           </View>

//           <View style={{height:20,backgroundColor:'white',flex:1}}>
//           <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>
//             <TouchableOpacity onPress={() => {  this._openAddressBottomDrawer(); }}>
//               <Text style={{fontSize:10,textAlign:'center',marginTop:5}}>
//                 选择收货地址
//               </Text>
//             </TouchableOpacity>
//           </View>
          
       
//           <View style={{zIndex:5,width:width,flex:14,flexDirection:'row',justifyContent:'center',borderTopLeftRadius:15,borderTopRightRadius:15,}}>



//             {

//               this.state.bottomDrawerFlag == true?(
//                 <FlatList  
//                     data={this.state.shoppingCars}
//                     alwaysBounceHorizontal = {false}
//                     showsHorizontalScrollIndicator = {false}
//                     showsVerticalScrollIndicator = {false}
//                     overScrollMode = {'never'}
//                     bounces = {false}
//                     renderItem={
//                       ({item})=> 
    
    
//                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
//                       <View style={{backgroundColor:'#f6f5ec',paddingTop:10,width:width*0.94}}>
//                       <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,backgroundColor:'#fffffb',}}>
                      
//                       <Image 
//                       source = {{uri:item.goodsAvatar}}
//                       style = {{width:80,height:80,borderRadius:3,marginTop:10,marginBottom:10,marginLeft:15}}
//                       />
                      
//                       <View style={{width:rightSideTextWidth+80,marginTop:10}}>
                          
//                         <Text style = {{fontWeight:"bold",fontSize:15,marginLeft:15,marginBottom:10}} >
//                           {item.goodsName}
//                         </Text>
    
//                           <Text style = {{borderWidth:2,borderColor:'#fab27b',backgroundColor:'#fab27b',color:'#b64533',marginLeft:15,width:width*0.63,marginTop:8,borderTopLeftRadius:20 }}>
//                             {item.goodsDescription}
//                           </Text>
                  
//                         <View style={{flexDirection:"row",marginLeft:15,marginTop:10}}>
//                           <Text style={{fontSize:15,fontWeight:"bold"}}>
//                             ¥ {item.goodsPrice}
//                           </Text>
//                             <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row",marginLeft:width*0.37}}>
//                               <Button
//                               onPress={()=> this.refreshPurchaseQuantitied(item,"-") }
//                               type="clear"
//                               icon={
//                                   <Icon
//                                   name="minuscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                               }
//                               />
//                               <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
//                               <Button
//                               onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
//                               type="clear"
//                               icon={
//                                   <Icon
//                                   name="pluscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                               }
//                               />
//                             </View>
//                         </View>  
//                         </View>
                  
//                     </View> 
              
//                     </View>
    
//                     </View>                
//                   }
//                   />):(
//                   <View>
//                     <FlatList 
//                     data = {this.state.userAddress}
//                     alwaysBounceHorizontal = {false}
//                     showsHorizontalScrollIndicator = {false}
//                     showsVerticalScrollIndicator = {false}
//                     overScrollMode = {'never'}
//                     bounces = {false}
//                     renderItem={
//                       ({item})=> 
                      
               
//                     <View style={{marginTop:10,}}>
//                     <View style={{backgroundColor:'#f6f5ec',width:width*0.9}}>
                      
//                       {/* 地址文字信息，选中 */}
//                       <View style={{flex:1,flexDirection:'row'}}>


//                         <View style={{borderRadius:10,backgroundColor:'white',width:width*0.82}}>
//                         <CheckBox
//                           containerStyle={{backgroundColor:'white',borderColor:'white'}}
//                           checkedColor='black'
//                           title={item.address +" "+item.userName+" "+item.phone}
//                           checked={this.state.choiceCheckBox.get(item.address+item.userName+item.phone)}
//                           onPress = { ()=>{
//                             this._choiceAddress(item);
//                           } }
//                         />   
//                         </View>



//                         <View style = {{width:width*0.08, flex:1,flexDirection:'column',justifyContent:'center'}}>
//                           <Button
//                                 onPress={
//                                   ()=>{
//                                     this.setState({isEditAddress: true,item:item})
//                                   }
//                                  }
//                                 type="clear"
//                                 icon={
//                                     <Icon
//                                     name="edit"
//                                     size={15}
//                                     color='#919191'
//                                     />
//                                 }
//                                 />
//                         </View>


//                       </View>


//                     </View>
//                     </View>
                  

                    
//                     }
//                     >

//                     </FlatList>
//                   </View>
//                   )
//             } 
//           </View>


//           {/* 收货地址 */}
//         </Animated.View>

//       </View>
//     )
//   }
// }












// import  React   from 'react';
// import { AsyncStorage,View, Text , Image,Dimensions,FlatList,TouchableOpacity,TouchableHighlight,StyleSheet,Animated} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { Button , Overlay,Input,CheckBox} from 'react-native-elements';
// import {storeApi , userApi} from '../environmental/dev'
// import styles from '../css/StoreGoodsListPageCss';

// const {width,height} = Dimensions.get('window')
// let shoppingCarListElementLength = -90
// // let shoppingCarListElementLength =-70
// export default class StoreGoodsListPage extends React.Component{

//   /* 左侧FlastList key */
//   _left_extraUniqueKey(item ,index){
//     return "left"+index+item;
//   }
//   /* 右侧FlastList key */
//   _right_extraUniqueKey(item ,index){
//     return "right"+index+item;
//   }

//   _drawer_extraUniqueKey(item,index){
//     return "drawer"+item;
//   }

//   /* 构造函数 */
//   constructor(props){
//     super(props)
//     this.state = {

//       choiceCheckBox:null,

//       data: [] ,

//       bottomDrawerFlag: true,

//       addressDrawerFlag: false,

//       //购物车
//       shoppingCars: [] ,

//       //打开开关
//       drawerFlag:false,
      
//       translateValue: new Animated.ValueXY({x:0, y:shoppingCarListElementLength}),

//       translateAddressValue: new Animated.ValueXY({x:0,y:340}),

//       modalVisible: false,

//       groupLength:0,

//       leftData:[],
//       /* 右侧数据 */
//       rightDatas:[],

//       /* 左侧下标 key ， 右侧分组高度范围 */
//       section:[],

//       /* map结构 分组 */
//       sectionTo: null ,

//       lefDataItemBackgroundColor:'#fcaf17',

//       /* 左侧item 激活标记,默认第一个 */
//       currentActive: 0,

//       /* 默认上一个item */
//       pre:-1,
      
//       /* 默认下一个item */
//       next:1,

//       /* 商品列表 */
//       shoppingList:[],

//       /* 默认抽屉是否打开 */
//       openDrawer:false,

//       /* 当前商店编号 */
//       storeId:'',

//       /* 当前商店名称 */
//       storeName:'',

//       /* 当前商店电话 */
//       storeTelephone:'',

//       // /* 订单收货地址 */
//       // choiceAddress :'',

//       // clientAddress:'',

//       userAddress:'',

//       user :'',

//       /** 编辑收货地址覆盖组件开关 */
//       isEditAddress:false,

//       /* 修改的收货地址 */
//       changedAddress:'江西省景德镇昌江区紫晶路1920号',

//       /* 修改的客户名称 */
//       changedUserName:'吴彦祖',

//       /* 修改的联系电话 */
//       changedPhone:'19847284902',

//       /* 要改变的地址信息 */
//       item:'',


//       /* 选择收货地址确认按钮显示开关 */
//       isShowConfirm:true,

//       /* 付款按钮显示开关 */
//       isPayment:true,

//       /* 详情按钮显示开关 */
//       isDetail:false,

//       groupInfo:'',

//     }
//   }


//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }


//   /* 获取指定商店所有商品信息 */
//   componentDidMount(){

//     var _this = this;

//     var keys = ["user"];
//     AsyncStorage.multiGet(keys,function(err,result){
//         if(err){
//             console.log('AsyncStorage 获取保存的登陆用户信息时发生异常')
//             return;
//         } 
//           var user =  result[0][1];
//           _this.setState({userAddress: JSON.parse(user).receivingAddress,user: JSON.parse(user)})


//          var objUser =  JSON.parse(user);
//          var map = new Map();
//          for(var i = 0 ; i < objUser.receivingAddress.length; i++){
//            var obj = objUser.receivingAddress[i];
//            var key = obj.address+obj.userName+obj.phone

//            map.set(key,false);
//          }

//           _this.setState({choiceCheckBox:map})
//           return; 
//     })


//   const {route} = this.props;
//   const {storeId} = route.params;
//   const {storeName} = route.params;
//   const {telephone} = route.params;

//   /* 请求参数包含请求头 */
//   let opt = {
//     method:'POST',
//     body:JSON.stringify({
//       storeId:storeId
//     }),
//     headers:{
//         Accept: "application/json", "Content-Type": "application/json",
//       }
//     }

//     /* 请求地址 */
//     let url = storeApi + '/api/goods/storeGoodsList'

//     fetch(url,opt)
//     .then(response =>response.json())
//     .then(json=>{
//       data = json.data;
//       var _rightData = [];
//       var _leftData = [];
//       var _section = [];
//       var pre = 0;
//       var count = 1;

//       // var sectionMap = new Map();


//       var  itemIndex = 0 ;

//       for(var i=0;i<data.length;i++){
//         const {title,goodsList} = data[i];
    
//         let _section_childer = {
//         index:i,
//         startItem:pre<=0?0:pre+1,
//         endItem:goodsList.length+pre
//         }
//         _section.push(_section_childer);


//         for(var j=0;j<goodsList.length;j++){
//         count = count+1;
//         // sectionMap.set(count,i);
//         _rightData.push(goodsList[j])  
//         }
//         _leftData.push(title);
//         pre = goodsList.length+pre
//       }


      
//       console.log("分组信息:"+JSON.stringify(_section))

    

//       this.setState({
//           rightDatas: _rightData,
//           leftData: _leftData,
//           section: _section,
//           // sectionTo: sectionMap,
//           stordId:storeId,
//           storeName:storeName,
//           storeTelephone: telephone,
//           groupInfo:data,
//       })



//       /* 分组信息 */



//     })
//   }



//   /* 监听右侧商品列表滑动浮动，改变左侧相应的商品分组样式 */
//   _on_right_Scroll=(changed)=>{
//     if(changed.changed[0].isViewable == true){
//       var newItemTitle = changed.changed[0].item.title;
//       for(var i = 0 ; i < this.state.groupInfo.length; i++){
//         if(this.state.groupInfo[i].title == newItemTitle){
//           this.refs.leftScroll.scrollToIndex({animated: true, index:i})
//           this.setState({
//             currentActive:i,
//             pre:i-1,
//             next:i+1
//           })
//           return;
//         }
//       }
//     }
//   }

//   // 提供一个open 方法让隐藏的购物车元素完整的展现出来
//   _openBottomDrawer(){

//     // this.setState({openDrawer: true})

//     /* 屏蔽详情显示 支付按钮 */
//     this.setState({isDetail:true,isPayment:false})

//     Animated.spring(this.state.translateValue,
//       {
//           toValue: {x:0, y:-((height*0.4+80))},    //目标值
//           velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//           tension: 25,               //控制速度。默认值40。
//           friction: 10,                //控制“弹性”/过冲。默认值7。
//       }).start();
// }

// // 提供一个 close 方法关闭购物车抽屉
// _closeBottomDrawer(){
//   // this.setState({openDrawer:!this.state.openDrawer})
//   /* 屏蔽结算和确认按钮 显示详情按钮 */
//   this.setState({isPayment:true,isShowConfirm:true,isDetail:false})
//   Animated.spring(this.state.translateValue,
//     {
//         toValue: {x:0, y:((height*0.4))},    //目标值
//         velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//         tension: 25,               //控制速度。默认值40。
//         friction: 7,                //控制“弹性”/过冲。默认值7。
//     }).start();
// }




//   // 提供一个open 方法让隐藏的收货地址元素完整的展现出来
//   _openAddressBottomDrawer(){

//     this.setState({bottomDrawerFlag: !this.state.bottomDrawerFlag})

//     /* 反转isShowConfim 和  isPayment 状态 */
//     this.setState({isShowConfirm:!this.state.isShowConfirm,isPayment:!this.state.isPayment})


//     Animated.spring(this.state.translateAddressValue,
//       {
//           toValue: {x:0, y:0},    //目标值
//           velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//           tension: 25,               //控制速度。默认值40。
//           friction: 10,                //控制“弹性”/过冲。默认值7。
//       }).start();
// }

// // 提供一个 close 方法关闭收货地址
// _closeAddressBottomDrawer(){

//   Animated.spring(this.state.translateAddressValue,
//     {
//         toValue: {x:0, y:((height*0.4)-60)},    //目标值
//         velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
//         tension: 25,               //控制速度。默认值40。
//         friction: 7,                //控制“弹性”/过冲。默认值7。
//     }).start();
// }

//   /* 刷新购物车 - ,+ */
//   refreshPurchaseQuantitied=(item,flag)=>{
//       if(flag == "+"){
//         this._changeGoodsList(item,flag);
//         }else{
//         this._changeGoodsList(item,flag);        
//         return ;
//         }
//       return ;
  
//   }

//   /** 
//    * 清空购物车
//   */
//   _clearShoppingCars(){
//     /*  this.state.shoppingCars 的value置为null */
//     this.setState({shoppingCars:''})
//   }
  

//   /* 向购物车中添加商品 */
//   _addToShoppingCar(item){
//     this.state.shoppingCars.push(item);
//     this.setState({shoppingCars: this.state.shoppingCars});
//   }

//   /* 在购物车中删除商品 */
//   _deleteOnShoppingCar(item){
//     for(var i = 0 ; i <  this.state.shoppingCars.length ; i++){
//       if(this.state.shoppingCars[i].goodsName == item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
//         this.state.shoppingCars.splice(i,1);
//         this.setState({shoppingCars: this.state.shoppingCars});
//       }
//     }
//   }

//   /** 改变商品列表选中的数量 
//    * itme 商品
//    * flag 标记 + or -
//   */
//   _changeGoodsList(item,flag){

//     if(flag == "-"){
//       this._reduce(item);
//       return ;
//     }


//     if(flag == "+"){
//       this._increase(item);
//       return;
//     }
//   }


//   /**
//    *  商品列表(this.state.rightDatas)减少选中数量
//    *  item 商品元素
//   */
//   _reduce(item){
//     for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//       if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId && this.state.rightDatas[i].purchaseQuantity>0){
//         this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity - 1;
//         this.setState({rightDatas: this.state.rightDatas})



//         var tempShoppingCar = [];
//         for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//           if(this.state.rightDatas[i].purchaseQuantity>0){
//             tempShoppingCar.push(this.state.rightDatas[i])
//           }
//         }
//         this.setState({shoppingCars: tempShoppingCar})
//       }
//     }
//   }

//   /** 
//    *  商品列表（this.state.rightDatas）增加选中数量
//    *  item 商品元素
//   */
//    _increase(item){
//     for(var i = 0 ; i < this.state.rightDatas.length ; i++){  
//       if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId){
//         this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity + 1;
//         this.setState({rightDatas: this.state.rightDatas})
//             var tempShoppingCar = [];
//             for(var i = 0 ; i < this.state.rightDatas.length ; i++){
//               if(this.state.rightDatas[i].purchaseQuantity>0){
//                 tempShoppingCar.push(this.state.rightDatas[i])
//               }
//             }
//             this.setState({shoppingCars: tempShoppingCar})
//         return;
//       }
//     }


//    }


//    /**
//     *  改变购物车（this.state.shoppingCar）商品选择数量
//     * 
//     */
//    _changeShoppingCar(item,flag){
//     if(flag == "-"){
//       this._reduce2(item)
//       return ;
//     }


//     if(flag == "+"){
//       this._increase2(item);
//       return ;
//     }
//      return ;
//    }

//    /** 
//     * 减少购物车(this.state.shoppingCar)商品选中数量
//     *  item 减少的商品信息
//     */
//    _reduce2(item){
//     for(var i = 0  ; i <  this.state.shoppingCars.length ; i++){
//       if(this.state.shoppingCars[i].goodsId == item.goodsId &&  this.state.shoppingCars[i].goodsName == item.goodsName){
        
        
//         /** 如果本轮商品列表中的商品数量已经为一那么这次则删除该商品 */ 
//         if(this.state.shoppingCars[i].purchaseQuantity == 1){
//           this.state.shoppingCars.splice(i,1);
//         }else{
//           this.state.shoppingCars[i].purchaseQuantity =  this.state.shoppingCars[i].purchaseQuantity - 1;
//         }
//         this.setState({shoppingCars: this.state.shoppingCars}) 


//         return ;
//       }
//     }
//    }

//    /**
//     *  购物车（this.state.shoppinCar）增加选中商品数量
//     *  item 增加到商品信息
//     */

//     _increase2(item){
//       /** 是否是第一次向购物车添加商品 */
//       if(this.state.shoppingCars.length < 1){
//         this.state.shoppingCars.push(item);
//         this.setState({shoppingCars: this.state.shoppingCars})
//         return ;
//       }


//       /** 是否是第一次向购物车添加这款商品 */
//       for(var i = 0 ; i < this.state.shoppingCars.length ; i++){
      
//         if(this.state.shoppingCars[i].goodsName = item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
//           this.state.shoppingCars[i].purchaseQuantity = this.state.shoppingCars[i].purchaseQuantity + 1;
//           this.setState({shoppingCars: this.state.shoppingCars})
//           return ;
//         }
//       }


//       this.state.shoppingCars.push(item);
//       this.setState({shoppingCars: this.state.shoppingCars})
//     }


//     _choiceAddress(item){
//       var addressInfo  = null;
//       addressInfo = item.address+" "+item.userName+" "+item.phone

//       //关掉其他的选中 , 这时候 this.state.choiceAddress肯定是有值的，它可作为key （这作为优化点，此处选择for循环）
//       for(var key  of this.state.choiceCheckBox.keys()){
//         this.state.choiceCheckBox.set(key,false);
//       }

//       //获取this.state.choiceCheckBox 中的key 设置为true,并且将其他的设置为false
//       this.state.choiceCheckBox.set(item.address+item.userName+item.phone,true)

//       this.setState({choiceAddress: addressInfo,choiceCheckBox:this.state.choiceCheckBox,isShowConfirm:false})

//     }

//     /** 
//      * 付款
//      * 判断必填参数
//      *   */ 
//     _payment(){



//       if(null ==this.state.shoppingCars || this.state.shoppingCars.length<1){
//         return ;
//       }

//       const {route} = this.props;

//       if(this.state.choiceAddress == ''){
//         alert("缺少客户地址")
//       }

//       if(this.state.storeName==''){
//         alert("缺少商店名")
//       }

//       if(this.state.storeTelephone==''){
//         alert("缺少商店联系电话")
//       }

//       var createUserId = '1000001';
//       var goodsList = this.state.shoppingCars;
//       var storeName = this.state.storeName;
//       var storeTelephone = this.state.storeTelephone;
//       var goodsNumber = 0 ;

//       /* 计算商品总数量 */
//       for(var i = 0 ; i < goodsList.length ; i++){
//         goodsNumber = goodsNumber+goodsList[i].purchaseQuantity;
//       }

//       var receivingAddress = this.state.choiceAddress;

//       var paymentMethod = 1;

//       var tablewareNumber = '商家提供餐具'

//       /* 发送请求至支付API */
//       /* 请求参数包含请求头 */
//       let opt = {
//         method:'POST',
//         body:JSON.stringify({
//           createUserId:createUserId,
//           goodsList,goodsList,
//           storeName:storeName,
//           storeTelephone:storeTelephone,
//           goodsNumber:goodsNumber,
//           receivingAddress:receivingAddress,
//           paymentMethod:paymentMethod,
//           tablewareNumber:tablewareNumber,
//         }),
//         headers:{
//             Accept: "application/json", "Content-Type": "application/json",
//           }
//         }

//         /* 请求地址 */
//         let url = storeApi + '/api/order/add'
//         fetch(url,opt)
//         .then(response =>response.json())
//         .then(json=>{
//           data = json.data;
//           if(json.code==1){
//             /* 将购物车抽屉关闭，清空购物车 */
//             this._closeBottomDrawer();
//             this.setState({shoppingCars:null})
            
//           }
//           console.log("支付接口返回结果"+JSON.stringify(json))
//         }).catch(error => console.error('Error:', error))

//     }


//     /**  编辑收货地址 
//      * 
//      *   item 为原来收货地址信息 address ， userName, phone
//      *   change 为要改变的地址信息
//     */
//     _editAddress(item,change){
//       var _userId = this.state.user.createUserId;
//       //userAddress  找到指定的元素删除 ，然后在添加新编辑的元素
//       for(var i  = 0 ; i < this.state.userAddress.length ; i++){
//         var obj = this.state.userAddress[i];
//         if(item.address  == obj.address  && item.userName == obj.userName && item.phone == obj.phone){
//           this.state.userAddress.splice(i,1);
//         }
//       }
//       this.state.userAddress.unshift(change);
//             /**  在服务器上更新用户的收货地址信息,请求成功再去修改前端 */
//             let opt = {
//               method:'POST',
//               body:JSON.stringify({
//                 createUserId: _userId,
//                 receivingAddress: this.state.userAddress
//               }),
//               headers:{
//                   Accept: "application/json", "Content-Type": "application/json",
//                 }
//               }
          
//               /* 请求地址 */
//               let url = userApi + '/api/user/update'
          
//               fetch(url,opt)
//               .then(response =>response.json())
//               .then(json=>{
//                 data = json.data;
//                 /* 判断请求服务API是否成功，如果成功了就改变 state.userAddress  */
//                 if(json.code == 1){
//                   this.setState({userAddress:this.state.userAddress,isEditAddress: false})
//                   //choiceCheckBox
//                   this._initUserAddress(this.state.userAddress)
//                   alert(json.msg)
//                 }else{
//                   alert(json.msg)
//                 }
//               })



//     }


    

//   _updatUserAddress(objUser){
//     var map = new Map();
//     for(var i = 0 ; i < objUser.receivingAddress.length; i++){
//       var obj = objUser.receivingAddress[i];
//       var key = obj.address+obj.userName+obj.phone
//       map.set(key,false);
//     }

//      _this.setState({choiceCheckBox:map})
//   }

//   /** 
//    * 初始化用户收货地址
//   */
//   _initUserAddress(userAddress){
//     var map = new Map();
//     for(var i = 0 ; i < userAddress.length; i++){
//       var obj = userAddress[i];
//       var key = obj.address+obj.userName+obj.phone
//       map.set(key,false);
//     }
//     this.setState({choiceCheckBox:map})
//   }
    

//   /**
//    * 选择收货地址
//    *  */  

//   _confim(){
//     /* 返回购物车页面 */
//     /* 屏蔽确定和详情按钮， 显示结算按钮 */

//     this.setState({bottomDrawerFlag: true,isShowConfirm:true,isDetail:true,isPayment:false})
//   }


//   /* 视图 */
//   render(){
//     const {width,height} = Dimensions.get('window')
//     var leftSideWidth = width*(1/5);
//     var rightSidiWidth = width*(4/5);
//     var rightSideTextWidth = rightSidiWidth-120-15;


    
//       return(
//         <View style={{flex:1,width:width,flexDirection:"row",flexWrap:'wrap'}}>
//           {/* 左侧商品分组FlastList */}
//           <View  style={{ width:leftSideWidth,borderColor:'#D3D3D3',height:height-17} }>
//               <FlatList
//               showsVerticalScrollIndicator = {false}
//               ref = 'leftScroll'
//               keyExtractor = {this._left_extraUniqueKey}
//               data = {this.state.leftData}
//               renderItem={({item,index})=>
//                   <View style={ this.state.currentActive==index?styles.activetLeftItem:
//                   index==this.state.pre?styles.pre_Item:
//                   index==this.state.next?styles.next_item:styles.defaultLeftItem
//                   }>
//                       <Text>
//                         {item}
//                       </Text>
//                   </View>
//               }
//               >
//               </FlatList>
//           </View>
//           {/* 右侧商品FlastList */}
//           <View style={{width:width*(4/5),height:height-170,backgroundColor:'white'}}>
//               <FlatList 

//             alwaysBounceHorizontal = {false}
//             overScrollMode = {'never'}


//               bounces = {false}
//               showsHorizontalScrollIndicator= {false}
//               showsVerticalScrollIndicator = {false}
//               keyExtractor = {this._right_extraUniqueKey}
//               onViewableItemsChanged = {this._on_right_Scroll}
//               data = {
//                   this.state.rightDatas
//               }
//               renderItem={
//                 ({item})=>
//                 <View style = {{flexDirection:"row",flexWrap:"wrap",marginBottom:30,height:height*0.15,alignItems:'center'}}>
//                     <Image source = {{uri:item.goodsAvatar}} style = {{width:width*0.3,height:height*0.15,borderRadius:10,marginLeft:5}}/>
//                     {/* 右侧文本信息盒子 */}
//                     <View style={{width:rightSideTextWidth,flex:1,flexDirection:'column',justifyContent:'space-between'}}>
                     
//                      <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',}}>
                     
//                       {/* 商品名称 */}
//                       <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15}} >
//                       {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
//                       {item.goodsName}
//                       </Text>
//                       {/* 商品描述 */}
//                       <View style={{marginLeft:15}}>
//                         <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
//                             {item.goodsDescription}
//                         </Text>
//                       </View>
//                       {/* 商品月销 */}  
//                       <View style={{flexDirection:"row",marginLeft:15,}}> 
//                         <Text>
//                             月售 {item.goodsSalesVolume}
//                         </Text>
//                       </View>
//                       </View>


                    
//                     {/* 商品价格   商品加、减 控件 */}
//                      <View style={{flexDirection:"row",marginLeft:15,flex:1,alignItems:'flex-end',}}>
//                         {/* 商品价格 */}
//                         <Text style={{fontSize:30,fontWeight:"bold"}}>
//                           <Text style={{fontSize:15}}>¥</Text> {item.goodsPrice}
//                         </Text>
//                         {/* 商品减少、增加控件 */}
                        
                        
//                         <View style={{marginLeft:50,flex:1,flexDirection:"row",alignItems:'center'}}>
//                             {/* 商品减少按钮 */}
//                             <Button
//                             // style={{borderColor:'red',borderWidth:1}}
//                             type="clear"
//                             onPress={()=>{this.refreshPurchaseQuantitied(item,"-")}}
//                             icon={
//                                 <Icon
//                                 name="minuscircle"
//                                 size={20}
//                                 color='#fab27b'
//                                 />
//                                 }
//                             />
//                             {/* 单品选择数量 */}
//                             <Text style={{}}>{item.purchaseQuantity}</Text>
//                             {/* 单品增加按钮 */}
//                             <Button
//                             type="clear"
//                             // style={{borderColor:'red',borderWidth:1}}
//                             onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
//                             icon={
//                                 <Icon
//                                 name="pluscircle"
//                                 size={20}
//                                 // color='#0000ff'
//                                 color = '#fab27b'
//                                 />
//                                 }
//                             />
//                         </View>



//                     </View>
                
                
//                     </View>
//                   </View>
//               }>
//             </FlatList>
//         </View>    
        

      
//       <View style={{width:width,height:40,shadowColor: "black",zIndex:2,backgroundColor:'white'}}>
      
        
//         {/* 分割线  以下三个按钮是根据不同的页面显示不同的按钮并且实现不同的功能 */}
//         <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>

//         <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isDetail}} 
//           onPress={() => {this._openBottomDrawer();}}>
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
//             详情
//           </Text>
//         </TouchableOpacity>


//         <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isPayment}} 
//           onPress={() => {
//             //结算函数
//             this._payment()
//           }}
            
//         >
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
//             结算
//           </Text>
//         </TouchableOpacity>


//         <TouchableOpacity  style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isShowConfirm}}
//           onPress={()=>{this._confim()}}
//         >
//           <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>
//             确定
//           </Text>

//         </TouchableOpacity>


//       </View>



//     {/* 编辑收货地址 */}
//     <Overlay isVisible={this.state.isEditAddress}>
//       <View style={{width:width*0.8,height:height*0.4,flexDirection:'column',flexWrap:'wrap',borderRadius:20,justifyContent:'center'}}>
//         {/* <Text>开始编辑收货地址吧</Text> */}
//         <Input
//           placeholder="收货地址"
//           value = {this.state.changedAddress}
//           onChangeText={ value=>this.setState({changedAddress: value})}
//           // leftIcon={{ type: 'font-awesome', name: 'comment' }}
//           style={{width:width*0.7}}
//           // onChangeText={value => this.setState({ comment: value })}
//           />

//         <Input
//           placeholder="客户名称"
//           style={{width:width*0.7}}
//           value = {this.state.changedUserName}
//           onChangeText={ value=>this.setState({changedUserName: value})}
//           />


//         <Input
//           placeholder="联系电话"
//           onChangeText={ value=>this.setState({changedPhone: value})}
//           style={{width:width*0.7}}
//           value = {this.state.changedPhone}
//           />

        
//         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
//         <Button title="确定" 
//           style={{width:width*0.25}}
//           onPress={
//             ()=>{
//               // alert("点击了确定编辑收货地址按钮")
            
//               let  change = {
//                 'address':this.state.changedAddress,
//                 'userName':this.state.changedUserName,
//                 'phone':this.state.changedPhone
//               }
//               this._editAddress(this.state.item,change);
//             }
//           }
//           />

//           <Button title="取消" 
//           style={{width:width*0.25}}
//           onPress={
//             ()=>{
//               this.setState({isEditAddress: false})
//             }
//           }
//           />
//          </View>
//       </View>      
//     </Overlay>


//       <Animated.View style={{backgroundColor:'#f6f5ec',height:400,transform:[{translateX:0},{translateY:this.state.translateValue.y}],
//       borderTopLeftRadius:15,borderTopRightRadius:15,zIndex:1,
//       }} >
//             <TouchableOpacity 
//             style={{borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#FFDEAD',height:24}}
//               onPress={() => {
//               this._closeBottomDrawer();
//               }}
//             >        
//               <Text style={styles.tips}>
//                 购买列表
//               </Text>
//           </TouchableOpacity>


//           {/* 清空购物车div */}
//           <View style={{backgroundColor:'white',flex:1,flexDirection:'column',flexWrap:'wrap'}}>
//             <View style={{flex:1,flexDirection:'column',flexWrap:'wrap',width:width*0.4,marginLeft:width*0.75}}>
//               <Button style={{width:width*0.1,marginTop:-2}}

//               onPress={()=>{
//                 this._clearShoppingCars();
//               }}

//               type='clear'
//                   icon={
//                     <Icon
//                     name="delete"
//                     size={10}
//                     color='#919191'
//                     />
//                     }
//               />
//               <View style={{borderColor:'red',width:width*0.3,marginTop:7}}>
//                 <Text style={{fontSize:10,color:'#919191'}}>
//                   清空购物车
//                 </Text>
//               </View>
//             </View>
//             <View 
//               style = {{height:0.09,backgroundColor:'#DEDEDE'}}
//             />
//           </View>

//           <View style={{height:20,backgroundColor:'white',flex:1}}>
//           <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>
//             <TouchableOpacity onPress={() => {  this._openAddressBottomDrawer(); }}>
//               <Text style={{fontSize:10,textAlign:'center',marginTop:5}}>
//                 选择收货地址
//               </Text>
//             </TouchableOpacity>
//           </View>
          
       
//           <View style={{zIndex:5,width:width,flex:14,flexDirection:'row',justifyContent:'center',borderTopLeftRadius:15,borderTopRightRadius:15,}}>



//             {

//               this.state.bottomDrawerFlag == true?(
//                 <FlatList  
//                     data={this.state.shoppingCars}
//                     alwaysBounceHorizontal = {false}
//                     showsHorizontalScrollIndicator = {false}
//                     showsVerticalScrollIndicator = {false}
//                     overScrollMode = {'never'}
//                     bounces = {false}
//                     renderItem={
//                       ({item})=> 
    
    
//                       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
//                       <View style={{backgroundColor:'#f6f5ec',paddingTop:10,width:width*0.94}}>
//                       <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,backgroundColor:'#fffffb',}}>
                      
//                       <Image 
//                       source = {{uri:item.goodsAvatar}}
//                       style = {{width:80,height:80,borderRadius:3,marginTop:10,marginBottom:10,marginLeft:15}}
//                       />
                      
//                       <View style={{width:rightSideTextWidth+80,marginTop:10}}>
                          
//                         <Text style = {{fontWeight:"bold",fontSize:15,marginLeft:15,marginBottom:10}} >
//                           {item.goodsName}
//                         </Text>
    
//                           <Text style = {{borderWidth:2,borderColor:'#fab27b',backgroundColor:'#fab27b',color:'#b64533',marginLeft:15,width:width*0.63,marginTop:8,borderTopLeftRadius:20 }}>
//                             {item.goodsDescription}
//                           </Text>
                  
//                         <View style={{flexDirection:"row",marginLeft:15,marginTop:10}}>
//                           <Text style={{fontSize:15,fontWeight:"bold"}}>
//                             ¥ {item.goodsPrice}
//                           </Text>
//                             <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row",marginLeft:width*0.37}}>
//                               <Button
//                               onPress={()=> this.refreshPurchaseQuantitied(item,"-") }
//                               type="clear"
//                               icon={
//                                   <Icon
//                                   name="minuscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                               }
//                               />
//                               <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
//                               <Button
//                               onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
//                               type="clear"
//                               icon={
//                                   <Icon
//                                   name="pluscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                               }
//                               />
//                             </View>
//                         </View>  
//                         </View>
                  
//                     </View> 
              
//                     </View>
    
//                     </View>                
//                   }
//                   />):(
//                   <View>
//                     <FlatList 
//                     data = {this.state.userAddress}
//                     alwaysBounceHorizontal = {false}
//                     showsHorizontalScrollIndicator = {false}
//                     showsVerticalScrollIndicator = {false}
//                     overScrollMode = {'never'}
//                     bounces = {false}
//                     renderItem={
//                       ({item})=> 
                      
               
//                     <View style={{marginTop:10,}}>
//                     <View style={{backgroundColor:'#f6f5ec',width:width*0.9}}>
                      
//                       {/* 地址文字信息，选中 */}
//                       <View style={{flex:1,flexDirection:'row'}}>


//                         <View style={{borderRadius:10,backgroundColor:'white',width:width*0.82}}>
//                         <CheckBox
//                           containerStyle={{backgroundColor:'white',borderColor:'white'}}
//                           checkedColor='black'
//                           title={item.address +" "+item.userName+" "+item.phone}
//                           checked={this.state.choiceCheckBox.get(item.address+item.userName+item.phone)}
//                           onPress = { ()=>{
//                             this._choiceAddress(item);
//                           } }
//                         />   
//                         </View>



//                         <View style = {{width:width*0.08, flex:1,flexDirection:'column',justifyContent:'center'}}>
//                           <Button
//                                 onPress={
//                                   ()=>{
//                                     this.setState({isEditAddress: true,item:item})
//                                   }
//                                  }
//                                 type="clear"
//                                 icon={
//                                     <Icon
//                                     name="edit"
//                                     size={15}
//                                     color='#919191'
//                                     />
//                                 }
//                                 />
//                         </View>


//                       </View>


//                     </View>
//                     </View>
                  

                    
//                     }
//                     >

//                     </FlatList>
//                   </View>
//                   )
//             } 
//           </View>


//           {/* 收货地址 */}
//         </Animated.View>

//       </View>
//     )
//   }
// }













//333333333
import  React   from 'react';
import { AsyncStorage,View, Text , Image,Dimensions,FlatList,TouchableOpacity,TouchableHighlight,StyleSheet,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button , Overlay,Input,CheckBox} from 'react-native-elements';
import {storeApi , userApi} from '../environmental/dev'
import styles from '../css/StoreGoodsListPageCss';

const {width,height} = Dimensions.get('window')
let shoppingCarListElementLength = 0
// let shoppingCarListElementLength =-70
export default class StoreGoodsListPage extends React.Component{

  /* 左侧FlastList key */
  _left_extraUniqueKey(item ,index){
    return "left"+index+item;
  }
  /* 右侧FlastList key */
  _right_extraUniqueKey(item ,index){
    return "right"+index+item;
  }

  _drawer_extraUniqueKey(item,index){
    return "drawer"+item;
  }

  /* 构造函数 */
  constructor(props){
    super(props)
    this.state = {

      choiceCheckBox:null,

      data: [] ,

      bottomDrawerFlag: true,

      addressDrawerFlag: false,

      //购物车
      shoppingCars: [] ,

      //打开开关
      drawerFlag:false,
      
      translateValue: new Animated.ValueXY({x:0, y:shoppingCarListElementLength}),

      translateAddressValue: new Animated.ValueXY({x:0,y:340}),

      modalVisible: false,

      groupLength:0,

      leftData:[],
      /* 右侧数据 */
      rightDatas:[],

      /* 左侧下标 key ， 右侧分组高度范围 */
      section:[],

      /* map结构 分组 */
      sectionTo: null ,

      lefDataItemBackgroundColor:'#fcaf17',

      /* 左侧item 激活标记,默认第一个 */
      currentActive: 0,

      /* 默认上一个item */
      pre:-1,
      
      /* 默认下一个item */
      next:1,

      /* 商品列表 */
      shoppingList:[],

      /* 默认抽屉是否打开 */
      openDrawer:false,

      /* 当前商店编号 */
      storeId:'',

      /* 当前商店名称 */
      storeName:'',

      /* 当前商店电话 */
      storeTelephone:'',

      // /* 订单收货地址 */
      // choiceAddress :'',

      // clientAddress:'',

      userAddress:'',

      user :'',

      /** 编辑收货地址覆盖组件开关 */
      isEditAddress:false,

      /* 修改的收货地址 */
      changedAddress:'江西省景德镇昌江区紫晶路1920号',

      /* 修改的客户名称 */
      changedUserName:'吴彦祖',

      /* 修改的联系电话 */
      changedPhone:'19847284902',

      /* 要改变的地址信息 */
      item:'',


      /* 选择收货地址确认按钮显示开关 */
      isShowConfirm:true,

      /* 付款按钮显示开关 */
      isPayment:true,

      /* 详情按钮显示开关 */
      isDetail:false,


      groupInfo:'',

    }
  }


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  /* 获取指定商店所有商品信息 */
  componentDidMount(){

    var _this = this;

    var keys = ["user"];
    AsyncStorage.multiGet(keys,function(err,result){
        if(err){
            console.log('AsyncStorage 获取保存的登陆用户信息时发生异常')
            return;
        } 
          var user =  result[0][1];
          _this.setState({userAddress: JSON.parse(user).receivingAddress,user: JSON.parse(user)})


         var objUser =  JSON.parse(user);
         var map = new Map();
         for(var i = 0 ; i < objUser.receivingAddress.length; i++){
           var obj = objUser.receivingAddress[i];
           var key = obj.address+obj.userName+obj.phone

           map.set(key,false);
         }

          _this.setState({choiceCheckBox:map})
          return; 
    })


  const {route} = this.props;
  const {storeId} = route.params;
  const {storeName} = route.params;
  const {telephone} = route.params;

  /* 请求参数包含请求头 */
  let opt = {
    method:'POST',
    body:JSON.stringify({
      storeId:storeId
    }),
    headers:{
        Accept: "application/json", "Content-Type": "application/json",
      }
    }

    /* 请求地址 */
    let url = storeApi + '/api/goods/storeGoodsList'

    fetch(url,opt)
    .then(response =>response.json())
    .then(json=>{
      data = json.data;
      var _rightData = [];
      var _leftData = [];
      var _section = [];
      var pre = 0;
      var count = 1;

      var sectionMap = new Map();

      for(var i=0;i<data.length;i++){
        const {title,goodsList} = data[i];
    
        let _section_childer = {
        index:i,
        startItem:pre<=0?0:pre+1,
        endItem:goodsList.length+pre
        }
        _section.push(_section_childer);
        for(var j=0;j<goodsList.length;j++){
        count = count+1;
        sectionMap.set(count,i);

        _rightData.push(goodsList[j])

  
        }
        _leftData.push(title);
        pre = goodsList.length+pre
      }

      sectionMap.forEach(function (item) {
        console.log("分组item ："+item.toString());
        });


    

      this.setState({
          rightDatas: _rightData,
          leftData: _leftData,
          section: _section,
          sectionTo: sectionMap,
          stordId:storeId,
          storeName:storeName,
          storeTelephone: telephone,
          groupInfo:data,
      })
    })
  }



  /* 监听右侧商品列表滑动浮动，改变左侧相应的商品分组样式 */
  _on_right_Scroll=(changed)=>{
    if(changed.changed[0].isViewable == true){
      var newItemTitle = changed.changed[0].item.title;
      for(var i = 0 ; i < this.state.groupInfo.length; i++){
        if(this.state.groupInfo[i].title == newItemTitle){
          this.refs.leftScroll.scrollToIndex({animated: true, index:i})
          this.setState({
            currentActive:i,
            pre:i-1,
            next:i+1
          })
          return;
        }
      }
    }
  }
   

  // 提供一个open 方法让隐藏的购物车元素完整的展现出来
  _openBottomDrawer(){

    // this.setState({openDrawer: true})

    /* 屏蔽详情显示 支付按钮 */
    this.setState({isDetail:true,isPayment:false})

    Animated.spring(this.state.translateValue,
      {
          toValue: {x:0, y:-((height*0.4+80))},    //目标值
          velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
          tension: 25,               //控制速度。默认值40。
          friction: 10,                //控制“弹性”/过冲。默认值7。
      }).start();
}

// 提供一个 close 方法关闭购物车抽屉
_closeBottomDrawer(){
  // this.setState({openDrawer:!this.state.openDrawer})
  /* 屏蔽结算和确认按钮 显示详情按钮 */
  this.setState({isPayment:true,isShowConfirm:true,isDetail:false})
  Animated.spring(this.state.translateValue,
    {
        toValue: {x:0, y:((height*0.4))},    //目标值
        velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
        tension: 25,               //控制速度。默认值40。
        friction: 7,                //控制“弹性”/过冲。默认值7。
    }).start();
}




  // 提供一个open 方法让隐藏的收货地址元素完整的展现出来
  _openAddressBottomDrawer(){

    this.setState({bottomDrawerFlag: !this.state.bottomDrawerFlag})

    /* 反转isShowConfim 和  isPayment 状态 */
    this.setState({isShowConfirm:!this.state.isShowConfirm,isPayment:!this.state.isPayment})


    Animated.spring(this.state.translateAddressValue,
      {
          toValue: {x:0, y:0},    //目标值
          velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
          tension: 25,               //控制速度。默认值40。
          friction: 10,                //控制“弹性”/过冲。默认值7。
      }).start();
}

// 提供一个 close 方法关闭收货地址
_closeAddressBottomDrawer(){

  Animated.spring(this.state.translateAddressValue,
    {
        toValue: {x:0, y:((height*0.4)-60)},    //目标值
        velocity: 100,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
        tension: 25,               //控制速度。默认值40。
        friction: 7,                //控制“弹性”/过冲。默认值7。
    }).start();
}

  /* 刷新购物车 - ,+ */
  refreshPurchaseQuantitied=(item,flag)=>{
      if(flag == "+"){
        this._changeGoodsList(item,flag);
        }else{
        this._changeGoodsList(item,flag);        
        return ;
        }
      return ;
  
  }

  /** 
   * 清空购物车
  */
  _clearShoppingCars(){
    /*  this.state.shoppingCars 的value置为null */
    this.setState({shoppingCars:''})
  }
  

  /* 向购物车中添加商品 */
  _addToShoppingCar(item){
    this.state.shoppingCars.push(item);
    this.setState({shoppingCars: this.state.shoppingCars});
  }

  /* 在购物车中删除商品 */
  _deleteOnShoppingCar(item){
    for(var i = 0 ; i <  this.state.shoppingCars.length ; i++){
      if(this.state.shoppingCars[i].goodsName == item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
        this.state.shoppingCars.splice(i,1);
        this.setState({shoppingCars: this.state.shoppingCars});
      }
    }
  }

  /** 改变商品列表选中的数量 
   * itme 商品
   * flag 标记 + or -
  */
  _changeGoodsList(item,flag){

    if(flag == "-"){
      this._reduce(item);
      return ;
    }


    if(flag == "+"){
      this._increase(item);
      return;
    }
  }


  /**
   *  商品列表(this.state.rightDatas)减少选中数量
   *  item 商品元素
  */
  _reduce(item){
    for(var i = 0 ; i < this.state.rightDatas.length ; i++){
      if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId && this.state.rightDatas[i].purchaseQuantity>0){
        this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity - 1;
        this.setState({rightDatas: this.state.rightDatas})



        var tempShoppingCar = [];
        for(var i = 0 ; i < this.state.rightDatas.length ; i++){
          if(this.state.rightDatas[i].purchaseQuantity>0){
            tempShoppingCar.push(this.state.rightDatas[i])
          }
        }
        this.setState({shoppingCars: tempShoppingCar})
      }
    }
  }

  /** 
   *  商品列表（this.state.rightDatas）增加选中数量
   *  item 商品元素
  */
   _increase(item){
    for(var i = 0 ; i < this.state.rightDatas.length ; i++){  
      if(this.state.rightDatas[i].goodsName == item.goodsName && this.state.rightDatas[i].goodsId == item.goodsId){
        this.state.rightDatas[i].purchaseQuantity =  this.state.rightDatas[i].purchaseQuantity + 1;
        this.setState({rightDatas: this.state.rightDatas})
            var tempShoppingCar = [];
            for(var i = 0 ; i < this.state.rightDatas.length ; i++){
              if(this.state.rightDatas[i].purchaseQuantity>0){
                tempShoppingCar.push(this.state.rightDatas[i])
              }
            }
            this.setState({shoppingCars: tempShoppingCar})
        return;
      }
    }


   }


   /**
    *  改变购物车（this.state.shoppingCar）商品选择数量
    * 
    */
   _changeShoppingCar(item,flag){
    if(flag == "-"){
      this._reduce2(item)
      return ;
    }


    if(flag == "+"){
      this._increase2(item);
      return ;
    }
     return ;
   }

   /** 
    * 减少购物车(this.state.shoppingCar)商品选中数量
    *  item 减少的商品信息
    */
   _reduce2(item){
    for(var i = 0  ; i <  this.state.shoppingCars.length ; i++){
      if(this.state.shoppingCars[i].goodsId == item.goodsId &&  this.state.shoppingCars[i].goodsName == item.goodsName){
        
        
        /** 如果本轮商品列表中的商品数量已经为一那么这次则删除该商品 */ 
        if(this.state.shoppingCars[i].purchaseQuantity == 1){
          this.state.shoppingCars.splice(i,1);
        }else{
          this.state.shoppingCars[i].purchaseQuantity =  this.state.shoppingCars[i].purchaseQuantity - 1;
        }
        this.setState({shoppingCars: this.state.shoppingCars}) 


        return ;
      }
    }
   }

   /**
    *  购物车（this.state.shoppinCar）增加选中商品数量
    *  item 增加到商品信息
    */

    _increase2(item){
      /** 是否是第一次向购物车添加商品 */
      if(this.state.shoppingCars.length < 1){
        this.state.shoppingCars.push(item);
        this.setState({shoppingCars: this.state.shoppingCars})
        return ;
      }


      /** 是否是第一次向购物车添加这款商品 */
      for(var i = 0 ; i < this.state.shoppingCars.length ; i++){
      
        if(this.state.shoppingCars[i].goodsName = item.goodsName && this.state.shoppingCars[i].goodsId == item.goodsId){
          this.state.shoppingCars[i].purchaseQuantity = this.state.shoppingCars[i].purchaseQuantity + 1;
          this.setState({shoppingCars: this.state.shoppingCars})
          return ;
        }
      }


      this.state.shoppingCars.push(item);
      this.setState({shoppingCars: this.state.shoppingCars})
    }


    _choiceAddress(item){
      var addressInfo  = null;
      addressInfo = item.address+" "+item.userName+" "+item.phone

      //关掉其他的选中 , 这时候 this.state.choiceAddress肯定是有值的，它可作为key （这作为优化点，此处选择for循环）
      for(var key  of this.state.choiceCheckBox.keys()){
        this.state.choiceCheckBox.set(key,false);
      }

      //获取this.state.choiceCheckBox 中的key 设置为true,并且将其他的设置为false
      this.state.choiceCheckBox.set(item.address+item.userName+item.phone,true)

      this.setState({choiceAddress: addressInfo,choiceCheckBox:this.state.choiceCheckBox,isShowConfirm:false})

    }

    /** 
     * 付款
     * 判断必填参数
     *   */ 
    _payment(){



      if(null ==this.state.shoppingCars || this.state.shoppingCars.length<1){
        return ;
      }

      const {route} = this.props;

      if(this.state.choiceAddress == ''){
        alert("缺少客户地址")
      }

      if(this.state.storeName==''){
        alert("缺少商店名")
      }

      if(this.state.storeTelephone==''){
        alert("缺少商店联系电话")
      }

      var createUserId = '1000001';
      var goodsList = this.state.shoppingCars;
      var storeName = this.state.storeName;
      var storeTelephone = this.state.storeTelephone;
      var goodsNumber = 0 ;

      /* 计算商品总数量 */
      for(var i = 0 ; i < goodsList.length ; i++){
        goodsNumber = goodsNumber+goodsList[i].purchaseQuantity;
      }

      var receivingAddress = this.state.choiceAddress;

      var paymentMethod = 1;

      var tablewareNumber = '商家提供餐具'

      /* 发送请求至支付API */
      /* 请求参数包含请求头 */
      let opt = {
        method:'POST',
        body:JSON.stringify({
          createUserId:createUserId,
          goodsList,goodsList,
          storeName:storeName,
          storeTelephone:storeTelephone,
          goodsNumber:goodsNumber,
          receivingAddress:receivingAddress,
          paymentMethod:paymentMethod,
          tablewareNumber:tablewareNumber,
        }),
        headers:{
            Accept: "application/json", "Content-Type": "application/json",
          }
        }

        /* 请求地址 */
        let url = storeApi + '/api/order/add'
        fetch(url,opt)
        .then(response =>response.json())
        .then(json=>{
          data = json.data;
          if(json.code==1){
            /* 将购物车抽屉关闭，清空购物车 */
            this._closeBottomDrawer();
            this.setState({shoppingCars:null})
            
          }
          console.log("支付接口返回结果"+JSON.stringify(json))
        }).catch(error => console.error('Error:', error))

    }


    /**  编辑收货地址 
     * 
     *   item 为原来收货地址信息 address ， userName, phone
     *   change 为要改变的地址信息
    */
    _editAddress(item,change){
      var _userId = this.state.user.createUserId;
      //userAddress  找到指定的元素删除 ，然后在添加新编辑的元素
      for(var i  = 0 ; i < this.state.userAddress.length ; i++){
        var obj = this.state.userAddress[i];
        if(item.address  == obj.address  && item.userName == obj.userName && item.phone == obj.phone){
          this.state.userAddress.splice(i,1);
        }
      }
      this.state.userAddress.unshift(change);
            /**  在服务器上更新用户的收货地址信息,请求成功再去修改前端 */
            let opt = {
              method:'POST',
              body:JSON.stringify({
                createUserId: _userId,
                receivingAddress: this.state.userAddress
              }),
              headers:{
                  Accept: "application/json", "Content-Type": "application/json",
                }
              }
          
              /* 请求地址 */
              let url = userApi + '/api/user/update'
          
              fetch(url,opt)
              .then(response =>response.json())
              .then(json=>{
                data = json.data;
                /* 判断请求服务API是否成功，如果成功了就改变 state.userAddress  */
                if(json.code == 1){
                  this.setState({userAddress:this.state.userAddress,isEditAddress: false})
                  //choiceCheckBox
                  this._initUserAddress(this.state.userAddress)
                  alert(json.msg)
                }else{
                  alert(json.msg)
                }
              })



    }


    

  _updatUserAddress(objUser){
    var map = new Map();
    for(var i = 0 ; i < objUser.receivingAddress.length; i++){
      var obj = objUser.receivingAddress[i];
      var key = obj.address+obj.userName+obj.phone
      map.set(key,false);
    }

     _this.setState({choiceCheckBox:map})
  }

  /** 
   * 初始化用户收货地址
  */
  _initUserAddress(userAddress){
    var map = new Map();
    for(var i = 0 ; i < userAddress.length; i++){
      var obj = userAddress[i];
      var key = obj.address+obj.userName+obj.phone
      map.set(key,false);
    }
    this.setState({choiceCheckBox:map})
  }
    

  /**
   * 选择收货地址
   *  */  

  _confim(){
    /* 返回购物车页面 */
    /* 屏蔽确定和详情按钮， 显示结算按钮 */

    this.setState({bottomDrawerFlag: true,isShowConfirm:true,isDetail:true,isPayment:false})
  }


  /* 视图 */
  render(){
    const {width,height} = Dimensions.get('window')
    var leftSideWidth = width*(1/5);
    var rightSidiWidth = width*(4/5);
    var rightSideTextWidth = rightSidiWidth-120-15;


    
      return(
        <View style={{flex:1,width:width,flexDirection:"row",flexWrap:'wrap'}}>
          {/* 左侧商品分组FlastList */}
          <View  style={{ width:leftSideWidth,borderWidth:0.1,borderColor:'#D3D3D3',height:height-170} }>
              <FlatList
              showsVerticalScrollIndicator = {false}
              ref = 'leftScroll'
              keyExtractor = {this._left_extraUniqueKey}
              data = {this.state.leftData}
              renderItem={({item,index})=>
                  <View style={ this.state.currentActive==index?styles.activetLeftItem:
                  index==this.state.pre?styles.pre_Item:
                  index==this.state.next?styles.next_item:styles.defaultLeftItem
                  }>
                      <Text>
                        {item}
                      </Text>
                  </View>
              }
              >
              </FlatList>
          </View>
          {/* 右侧商品FlastList */}
          <View style={{width:width*(4/5),height:height-170}}>
              <FlatList 

            alwaysBounceHorizontal = {false}
            overScrollMode = {'never'}


              bounces = {false}
              showsHorizontalScrollIndicator= {false}
              showsVerticalScrollIndicator = {false}
              keyExtractor = {this._right_extraUniqueKey}
              onViewableItemsChanged = {this._on_right_Scroll}
              data = {
                  this.state.rightDatas
              }
              renderItem={
                ({item})=>
                <View style = {{flexDirection:"row",flexWrap:"wrap",marginBottom:30,height:height*0.15,alignItems:'center'}}>
                    <Image source = {{uri:item.goodsAvatar}} style = {{width:width*0.3,height:height*0.15,borderRadius:10,marginLeft:5}}/>
                    {/* 右侧文本信息盒子 */}
                    <View style={{width:rightSideTextWidth,flex:1,flexDirection:'column',justifyContent:'space-between'}}>
                     
                     <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',}}>
                     
                      {/* 商品名称 */}
                      <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15}} >
                      {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
                      {item.goodsName}
                      </Text>
                      {/* 商品描述 */}
                      <View style={{marginLeft:15}}>
                        <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
                            {item.goodsDescription}
                        </Text>
                      </View>
                      {/* 商品月销 */}  
                      <View style={{flexDirection:"row",marginLeft:15,}}> 
                        <Text>
                            月售 {item.goodsSalesVolume}
                        </Text>
                      </View>
                      </View>


                    
                    {/* 商品价格   商品加、减 控件 */}
                     <View style={{flexDirection:"row",marginLeft:15,flex:1,alignItems:'flex-end'}}>
                        {/* 商品价格 */}
                        <Text style={{fontSize:25,fontWeight:"bold"}}>
                          <Text style={{fontSize:15}}>¥</Text> {item.goodsPrice}
                        </Text>
                        {/* 商品减少、增加控件 */}
                        <View style={{marginLeft:50,flex:1,flexDirection:"row",alignItems:'center'}}>
                            {/* 商品减少按钮 */}
                            <Button
                            style={{}}
                            type="clear"
                            onPress={()=>{this.refreshPurchaseQuantitied(item,"-")}}
                            icon={
                                <Icon
                                name="minuscircle"
                                size={20}
                                color='#fab27b'
                                />
                                }
                            />
                            {/* 单品选择数量 */}
                            <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
                            {/* 单品增加按钮 */}
                            <Button
                            type="clear"
                            onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
                            icon={
                                <Icon
                                name="pluscircle"
                                size={20}
                                // color='#0000ff'
                                color = '#fab27b'
                                />
                                }
                            />
                        </View>
                    </View>
                
                
                    </View>
                  </View>
              }>



                
            </FlatList>
        </View>    
        

      
      <View style={{width:width,height:40,shadowColor: "black",zIndex:2,backgroundColor:'white'}}>
      
        
        {/* 分割线  以下三个按钮是根据不同的页面显示不同的按钮并且实现不同的功能 */}
        <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>

        <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isDetail}} 
          onPress={() => {this._openBottomDrawer();}}>
          <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
            详情
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isPayment}} 
          onPress={() => {
            //结算函数
            this._payment()
          }}
            
        >
          <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
            结算
          </Text>
        </TouchableOpacity>


        <TouchableOpacity  style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20,display:this.state.isShowConfirm}}
          onPress={()=>{this._confim()}}
        >
          <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>
            确定
          </Text>

        </TouchableOpacity>


      </View>



    {/* 编辑收货地址 */}
    <Overlay isVisible={this.state.isEditAddress}>
      <View style={{width:width*0.8,height:height*0.4,flexDirection:'column',flexWrap:'wrap',borderRadius:20,justifyContent:'center'}}>
        {/* <Text>开始编辑收货地址吧</Text> */}
        <Input
          placeholder="收货地址"
          value = {this.state.changedAddress}
          onChangeText={ value=>this.setState({changedAddress: value})}
          // leftIcon={{ type: 'font-awesome', name: 'comment' }}
          style={{width:width*0.7}}
          // onChangeText={value => this.setState({ comment: value })}
          />

        <Input
          placeholder="客户名称"
          style={{width:width*0.7}}
          value = {this.state.changedUserName}
          onChangeText={ value=>this.setState({changedUserName: value})}
          />


        <Input
          placeholder="联系电话"
          onChangeText={ value=>this.setState({changedPhone: value})}
          style={{width:width*0.7}}
          value = {this.state.changedPhone}
          />

        
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Button title="确定" 
          style={{width:width*0.25}}
          onPress={
            ()=>{
              // alert("点击了确定编辑收货地址按钮")
            
              let  change = {
                'address':this.state.changedAddress,
                'userName':this.state.changedUserName,
                'phone':this.state.changedPhone
              }
              this._editAddress(this.state.item,change);
            }
          }
          />

          <Button title="取消" 
          style={{width:width*0.25}}
          onPress={
            ()=>{
              this.setState({isEditAddress: false})
            }
          }
          />
         </View>
      </View>      
    </Overlay>


      <Animated.View style={{backgroundColor:'#f6f5ec',height:400,transform:[{translateX:0},{translateY:this.state.translateValue.y}],
      borderTopLeftRadius:15,borderTopRightRadius:15,zIndex:1,
      }} >
            <TouchableOpacity 
            style={{borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'#FFDEAD',height:24}}
              onPress={() => {
              this._closeBottomDrawer();
              }}
            >        
              <Text style={styles.tips}>
                购买列表
              </Text>
          </TouchableOpacity>


          {/* 清空购物车div */}
          <View style={{backgroundColor:'white',flex:1,flexDirection:'column',flexWrap:'wrap'}}>
            <View style={{flex:1,flexDirection:'column',flexWrap:'wrap',width:width*0.4,marginLeft:width*0.75}}>
              <Button style={{width:width*0.1,marginTop:-2}}

              onPress={()=>{
                this._clearShoppingCars();
              }}

              type='clear'
                  icon={
                    <Icon
                    name="delete"
                    size={10}
                    color='#919191'
                    />
                    }
              />
              <View style={{borderColor:'red',width:width*0.3,marginTop:7}}>
                <Text style={{fontSize:10,color:'#919191'}}>
                  清空购物车
                </Text>
              </View>
            </View>
            <View 
              style = {{height:0.09,backgroundColor:'#DEDEDE'}}
            />
          </View>

          <View style={{height:20,backgroundColor:'white',flex:1}}>
          <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>
            <TouchableOpacity onPress={() => {  this._openAddressBottomDrawer(); }}>
              <Text style={{fontSize:10,textAlign:'center',marginTop:5}}>
                选择收货地址
              </Text>
            </TouchableOpacity>
          </View>
          
       
          <View style={{zIndex:5,width:width,flex:14,flexDirection:'row',justifyContent:'center',borderTopLeftRadius:15,borderTopRightRadius:15,}}>



            {

              this.state.bottomDrawerFlag == true?(
                <FlatList  
                    data={this.state.shoppingCars}
                    alwaysBounceHorizontal = {false}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    overScrollMode = {'never'}
                    bounces = {false}
                    renderItem={
                      ({item})=> 
    
    
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
                      <View style={{backgroundColor:'#f6f5ec',paddingTop:10,width:width*0.94}}>
                      <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,backgroundColor:'#fffffb',}}>
                      
                      <Image 
                      source = {{uri:item.goodsAvatar}}
                      style = {{width:80,height:80,borderRadius:3,marginTop:10,marginBottom:10,marginLeft:15}}
                      />
                      
                      <View style={{width:rightSideTextWidth+80,marginTop:10}}>
                          
                        <Text style = {{fontWeight:"bold",fontSize:15,marginLeft:15,marginBottom:10}} >
                          {item.goodsName}
                        </Text>
    
                          <Text style = {{borderWidth:2,borderColor:'#fab27b',backgroundColor:'#fab27b',color:'#b64533',marginLeft:15,width:width*0.63,marginTop:8,borderTopLeftRadius:20 }}>
                            {item.goodsDescription}
                          </Text>
                  
                        <View style={{flexDirection:"row",marginLeft:15,marginTop:10}}>
                          <Text style={{fontSize:15,fontWeight:"bold"}}>
                            ¥ {item.goodsPrice}
                          </Text>
                            <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row",marginLeft:width*0.37}}>
                              <Button
                              onPress={()=> this.refreshPurchaseQuantitied(item,"-") }
                              type="clear"
                              icon={
                                  <Icon
                                  name="minuscircle"
                                  size={20}
                                  color='#0000ff'
                                  />
                              }
                              />
                              <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
                              <Button
                              onPress={()=> this.refreshPurchaseQuantitied(item,"+") }
                              type="clear"
                              icon={
                                  <Icon
                                  name="pluscircle"
                                  size={20}
                                  color='#0000ff'
                                  />
                              }
                              />
                            </View>
                        </View>  
                        </View>
                  
                    </View> 
              
                    </View>
    
                    </View>                
                  }
                  />):(
                  <View>
                    <FlatList 
                    data = {this.state.userAddress}
                    alwaysBounceHorizontal = {false}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    overScrollMode = {'never'}
                    bounces = {false}
                    renderItem={
                      ({item})=> 
                      
               
                    <View style={{marginTop:10,}}>
                    <View style={{backgroundColor:'#f6f5ec',width:width*0.9}}>
                      
                      {/* 地址文字信息，选中 */}
                      <View style={{flex:1,flexDirection:'row'}}>


                        <View style={{borderRadius:10,backgroundColor:'white',width:width*0.82}}>
                        <CheckBox
                          containerStyle={{backgroundColor:'white',borderColor:'white'}}
                          checkedColor='black'
                          title={item.address +" "+item.userName+" "+item.phone}
                          checked={this.state.choiceCheckBox.get(item.address+item.userName+item.phone)}
                          onPress = { ()=>{
                            this._choiceAddress(item);
                          } }
                        />   
                        </View>



                        <View style = {{width:width*0.08, flex:1,flexDirection:'column',justifyContent:'center'}}>
                          <Button
                                onPress={
                                  ()=>{
                                    this.setState({isEditAddress: true,item:item})
                                  }
                                 }
                                type="clear"
                                icon={
                                    <Icon
                                    name="edit"
                                    size={15}
                                    color='#919191'
                                    />
                                }
                                />
                        </View>


                      </View>


                    </View>
                    </View>
                  

                    
                    }
                    >

                    </FlatList>
                  </View>
                  )
            } 
          </View>


          {/* 收货地址 */}
        </Animated.View>

      </View>
    )
  }
}

