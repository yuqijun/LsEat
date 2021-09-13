// // version 0.0.4
// import  React from 'react';
// import { connect } from 'react-redux'
// import { View, Text , Image,Dimensions,FlatList,TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { Button } from 'react-native-elements';
// import Drawer from 'react-native-drawer'
// import ShoppingListContent from '../component/ContentComponent'
// import {Synchronous,rightData} from '../redux/actionCreators'
// import {storeApi} from '../environmental/dev'
// import styles from '../css/StoreGoodsListPageCss'

// class StoreGoodsListPage extends React.Component{

//   /* 左侧FlastList key */
//   _left_extraUniqueKey(item ,index){
//     return "left"+index+item;
//   }
//   /* 右侧FlastList key */
//   _right_extraUniqueKey(item ,index){
//     return "right"+index+item;
//   }

//   /* 构造函数 */
//   constructor(props){
//     super(props)
//     this.state = {

//       groupLength:0,

//       leftData:[],
//       /* 右侧数据 */
//       rightData:[],

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

//     }
//   }

//   /* 获取指定商店所有商品信息 */
//   componentDidMount(){
//   const {route} = this.props;
//   const {storeId} = route.params;
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


      

//       let b  = {8:81}

//       this.setState({
//           rightData: _rightData,
//           leftData: _leftData,
//           section: _section,
//           sectionTo: sectionMap
//       })

//       this.props.changeData2(_rightData)
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
//   }



//   //刷新购物车  +
//   refreshPurchaseQuantity=(item)=>{
//       //获取 rightData
//       // var _rightData = this.state.rightData;



//       var _rightData = this.props.data;



//       for(var i = 0 ; i<_rightData.length ; i++){
//           if(item.goodsId == _rightData[i].goodsId){
//               _rightData[i].purchaseQuantity =  parseInt(_rightData[i].purchaseQuantity)+1 ;
//               this.setState({rightData: _rightData});
//               this.props.changeData(_rightData)
//           }
//         }

//   }


//   /* 刷新购物车 - */
//   refreshPurchaseQuantitied=(item)=>{
//     /* 获取 rightData */
//     // var _rightData = this.state.rightData;
//     var _rightData = this.props.data;
//     for(var i = 0 ; i<_rightData.length ; i++){
//       /* 找到减少的商品做运 --运算 */
//         if(item.goodsId == _rightData[i].goodsId){
//           if(parseInt(_rightData[i].purchaseQuantity)>=1){
//           _rightData[i].purchaseQuantity =  parseInt(_rightData[i].purchaseQuantity)-1 ;
//           this.setState({rightData: _rightData});
//           this.props.changeData(_rightData)
//           }
//         }
//     }
//   }


//   /* 关上抽屉 */
//   closeControlPanel = () => {
//     this._drawer.close()
//   };

//   /* 打开抽屉 */
//   openControlPanel = () => {
//     this._drawer.open()
//   };

    
//   /* 视图 */
//   render(){
//     const {width,height} = Dimensions.get('window')
//     var leftSideWidth = width*(1/5);
//     var rightSidiWidth = width*(4/5);
//     var rightSideTextWidth = rightSidiWidth-120-10;
//     return(
//       /* 抽屉 */
//       <Drawer
//       /* 抽屉方向 top／left／right／bottom */
//       side="bottom" 
//       /* 默认打开/关上抽屉 */
//       open={false}
//       /* 点击内容处 会关闭抽屉 */
//       tapToClose={true}
//       /* 抽屉出现的方式：overlay：抽屉覆盖内容 static:抽屉一只在内容后面 打开的时内容会滑动，displace：不会覆盖的 进出 */
//       type='overlay'
//       /* 抽屉占整个屏幕的百分比（1-0.6=0.4） */
//       openDrawerOffset={0.5}
//       /* 关闭抽屉后 抽屉在屏幕中的显示比例 */
//       closedDrawerOffset={0}
//       /* styles={drawerStyles}//抽屉样式，背景色 透明度，阴影啥的 */
//       ref={(_drawer) => this._drawer = _drawer}
//       /* 抽屉样式，背景色 透明度，阴影啥的 */
//       styles = {styles.drawerStyle}
//       /* 抽屉内容 */
//       content={<ShoppingListContent  />}
//       >
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
//               showsVerticalScrollIndicator = {false}
//               keyExtractor = {this._right_extraUniqueKey}
//               onViewableItemsChanged = {this._on_right_Scroll}
//               data = {
//                   this.state.rightData
//                   // this.props.data
//               }
//               renderItem={
//                   ({item})=>
//                   <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,borderWidth:0.5,marginBottom:15}}>
//                       <Image source = {{uri:item.goodsAvatar}} style = {{width:120,height:120}}/>
//                       {/* 右侧文本信息盒子 */}
//                       <View style={{width:rightSideTextWidth}}>
//                         {/* 商品名称 */}
//                         <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15,marginBottom:13}} >
//                         {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
//                         {item.goodsName}
//                         </Text>
//                       {/* 商品描述 */}
//                       <View style={{marginLeft:15,marginBottom:8}}>
//                         <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
//                             {item.goodsDescription}
//                         </Text>
//                       </View>
//                       {/* 商品月销 */}  
//                       <View style={{flexDirection:"row",marginLeft:15,marginBottom:10}}> 
//                         <Text>
//                             月售 {item.goodsSalesVolume}
//                         </Text>
//                       </View>
//                       {/* 商品价格   商品加、减 控件 */}
//                       <View style={{flexDirection:"row",marginLeft:15}}>
//                           {/* 商品价格 */}
//                           <Text style={{fontSize:16,fontWeight:"bold"}}>
//                               价格 {item.goodsPrice}
//                           </Text>
//                           {/* 商品减少、增加控件 */}
//                           <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row"}}>
//                               {/* 商品减少按钮 */}
//                               <Button
//                               type="clear"
//                               // onPressIn={this.refreshPurchaseQuantitied.bind(this,item)}

//                               onPress={()=>{this.refreshPurchaseQuantitied(item)}}
//                               // onPress={()=>}
//                               icon={
//                                   <Icon
//                                   name="minuscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                                   }
//                               />
//                               {/* 单品选择数量 */}
//                               <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
//                               {/* 单品增加按钮 */}
//                               <Button
//                               type="clear"
//                               // onPressIn={this.refreshPurchaseQuantity.bind(this,item)}
//                               onPress={()=> this.refreshPurchaseQuantity(item) }
//                               icon={
//                                   <Icon
//                                   name="pluscircle"
//                                   size={20}
//                                   color='#0000ff'
//                                   />
//                                   }
//                               />
//                           </View>
//                       </View>
//                   </View>
//                 </View>
//                 }>
//               </FlatList>
//           </View>          
//           {/* 底部结算按钮 */}
//           <TouchableOpacity onPressIn={()=>{this.openControlPanel()}}>
//             <Text style ={styles.tips}>
//               购买列表
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </Drawer>
//     )
//   }
// }

// /* 监听redux */
// const mapState = state => ({
//   data: state.rightData
// })

// /* 改变redux state */
// const mapDispatch = dispatch => ({
//   changeData(data) {
//     dispatch(Synchronous(data))
//   },
//   changeData2(data){
//     dispatch(rightData(data))
//   }
// })

// /* 连接 redux */
// export default connect(
//   mapState,
//   mapDispatch
// )(StoreGoodsListPage)






// version 0.0.5  可用
import  React , { useState }  from 'react';
import { connect } from 'react-redux'
import { View, Text , Image,Dimensions,FlatList,TouchableOpacity,TouchableHighlight,StyleSheet,Animated,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import {storeApi} from '../environmental/dev'
import styles from '../css/StoreGoodsListPageCss'
import { white } from 'react-native-paper/lib/typescript/styles/colors';

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

      /* 订单收货地址 */
      choiceAddress :'',

      clientAddress:'',

    }
  }


  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  /* 获取指定商店所有商品信息 */
  componentDidMount(){


  // var user = storage.get('user'); 
    // console.log("商品列表页面获取地址信息 ："+JSON.stringify(user))



  // var address = user.receivingAddress;


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



    

      this.setState({
          rightDatas: _rightData,
          leftData: _leftData,
          section: _section,
          sectionTo: sectionMap,
          stordId:storeId,
          storeName:storeName,
          storeTelephone: telephone,
      })
    })
  }



  /* 监听右侧商品列表滑动浮动，改变左侧相应的商品分组样式 */
  _on_right_Scroll=(changed)=>{
    // 右侧当前滑动所在位置
    var currentRightItem = changed.viewableItems[0].index+1;
    var _sectionTo = this.state.sectionTo;
    var index = 0;
    var mark = false;
    _sectionTo.forEach(function(key,value){
      if(mark){
        return;
      }

      if(currentRightItem==value){
          index = key;
          mark = true;
      }
    })
    index = parseInt(index);
    this.refs.leftScroll.scrollToIndex({animated: true, index:index})
    this.setState({
      currentActive:index,
      pre:index-1,
      next:index+1
    })
  }

  // 提供一个open 方法让隐藏的购物车元素完整的展现出来
  _openBottomDrawer(){

    this.setState({openDrawer: true})

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
  this.setState({openDrawer:!this.state.openDrawer})
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


    /**
     * 
     * 选择收货地址
     */
    _choiceAddress(item){
      var addressInfo  = null;
      addressInfo = item.address+" "+item.userName+" "+item.phone
      this.setState({choiceAddress: addressInfo,bottomDrawerFlag: !this.state.bottomDrawerFlag})
    }


    /** 
     * 付款
     * 判断必填参数
     *   */ 
    _payment(){

      const {route} = this.props;

      if(this.state.choiceAddress == ""){
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


    

    
  /* 视图 */
  render(){
    const {width,height} = Dimensions.get('window')
    var leftSideWidth = width*(1/5);
    var rightSidiWidth = width*(4/5);
    var rightSideTextWidth = rightSidiWidth-120-10;

    const userAddress = [
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"吴彦祖","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"古天乐","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"刘德华","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"黎明","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"丁鹏","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"阿祖","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"成龙","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"洪金宝","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"郭富城","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"马化腾","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"丁磊","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"李彦宏","phone":"15678940293"},
      {"createUserId":"111111","address":"上海市青浦区明珠路1188号","userName":"郭德纲","phone":"15678940293"},
    ]

    // const userAddress = this.state.clientAddress

      const DATAA = this.state.shoppingCars;
    
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
                <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,borderWidth:0.5,marginBottom:15}}>
                    <Image source = {{uri:item.goodsAvatar}} style = {{width:120,height:120}}/>
                    {/* 右侧文本信息盒子 */}
                    <View style={{width:rightSideTextWidth}}>
                      {/* 商品名称 */}
                      <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15,marginBottom:13}} >
                      {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
                      {item.goodsName}
                      </Text>
                    {/* 商品描述 */}
                    <View style={{marginLeft:15,marginBottom:8}}>
                      <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
                          {item.goodsDescription}
                      </Text>
                    </View>
                    {/* 商品月销 */}  
                    <View style={{flexDirection:"row",marginLeft:15,marginBottom:10}}> 
                      <Text>
                          月售 {item.goodsSalesVolume}
                      </Text>
                    </View>
                    {/* 商品价格   商品加、减 控件 */}
                    <View style={{flexDirection:"row",marginLeft:15}}>
                        {/* 商品价格 */}
                        <Text style={{fontSize:16,fontWeight:"bold"}}>
                            价格 {item.goodsPrice}
                        </Text>
                        {/* 商品减少、增加控件 */}
                        <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row"}}>
                            {/* 商品减少按钮 */}
                            <Button
                            type="clear"
                            // onPressIn={this.refreshPurchaseQuantitied.bind(this,(item,"-"))}

                            onPress={()=>{this.refreshPurchaseQuantitied(item,"-")}}
                            // onPress={()=>}
                            icon={
                                <Icon
                                name="minuscircle"
                                size={20}
                                color='#0000ff'
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
                                color='#0000ff'
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
      
        <View style = {{height:0.3,backgroundColor:'#DEDEDE'}}/>

        <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20
      ,display:this.state.openDrawer
      }} 
          onPress={() => {
            this._openBottomDrawer();
            }}
        >
        <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
          详情
        </Text>
        </TouchableOpacity>


        <TouchableOpacity style={{marginLeft:width*0.8,marginTop:7,backgroundColor:'#fab27b',height:26,borderRadius:20
      ,display:!this.state.openDrawer
      }} 
          onPress={() => {
            //结算函数
            this._payment()


            }}
            
        >
        <Text style = {{textAlign:'center',marginTop:5,color:'#EBEBEB'}}>  
          结算
        </Text>
        </TouchableOpacity>

      </View>

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

          <View style={{height:20,backgroundColor:'white',flex:1,borderColor:'red',borderWidth:0.5}}>
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
                  <View style = {{flex:1,flexDirection:'row'}}>
                    <FlatList 
                    data = {userAddress}
                    alwaysBounceHorizontal = {false}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    overScrollMode = {'never'}
                    bounces = {false}
                    renderItem={
                      ({item})=> 
                      
               
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:10}}>
                    <View style={{backgroundColor:'#f6f5ec',width:width*0.9}}>
                      

                      {/* 地址文字信息，选中 */}
                      <View style={{}}>
                        <TouchableOpacity style={{backgroundColor:'white',borderRadius:10,width:width*0.8}}

                        onPress={() => {  this._choiceAddress(item); }}

                        >
                          <Text>
                            {item.address}
                          </Text>
                          <Text>
                            {item.userName}
                          </Text>
                          <Text>
                            {item.phone}
                          </Text>
                        </TouchableOpacity>
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