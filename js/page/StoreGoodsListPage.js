// // version 0.0.3
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
//     let url = storeApi + '/api/goods/selectPageGetByStoreId'

//     fetch(url,opt)
//     .then(response =>response.json())
//     .then(json=>{
//       data = json.data;
//       var _rightData = [];
//       var _leftData = [];
//       var _section = [];
//       var pre = 0;

//       for(var i=0;i<data.length;i++){
//         const {title,goodsList} = data[i];
//         let _section_childer = {
//         index:i,
//         startItem:pre<=0?0:pre+1,
//         endItem:goodsList.length+pre
//         }
//         _section.push(_section_childer);
//         for(var j=0;j<goodsList.length;j++){
//         _rightData.push(goodsList[j])
//         }
//         _leftData.push(title);
//         pre = goodsList.length+pre
//       }

//       this.setState({
//           rightData: _rightData,
//           leftData: _leftData,
//           section: _section
//       })

//       this.props.changeData2(_rightData)

//     })

//     // this.props.changeData2(_rightData)

    
//   }


//   /* 监听右侧商品列表滑动浮动，改变左侧相应的商品分组样式 */
//   _on_right_Scroll=(changed)=>{
//     // 右侧当前滑动所在位置
//     var currentRightItem = changed.viewableItems[0].index+1;

//     console.log("监听右侧滑动-----"+currentRightItem);

//     /* 监听当rightItem 的index，左侧跳转到指定item，左侧item样式改变 */
//     for(var i = 0 ; i<this.state.section.length ; i++){
//       console.log("this.state.section[i].startItem  - - - - "+this.state.section[i].startItem)
//       console.log("this.state.section[i].endItem - - - - "+this.state.section[i].endItem)
//       if(currentRightItem>= this.state.section[i].startItem &&  currentRightItem<=this.state.section[i].endItem){
//         //获取右侧下标 
//         var activedItem = this.state.section[i].index;
//         this.refs.leftScroll.scrollToIndex({animated: true, index: activedItem})
//         this.setState({
//           currentActive:activedItem,
//           pre:activedItem-1,
//           next:activedItem+1
//         })

//       }
//     }
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
//       }
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
//                   // this.state.rightData
//                   this.props.data
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





// version 0.0.3
import  React from 'react';
import { connect } from 'react-redux'
import { View, Text , Image,Dimensions,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Drawer from 'react-native-drawer'
import ShoppingListContent from '../component/ContentComponent'
import {Synchronous,rightData} from '../redux/actionCreators'
import {storeApi} from '../environmental/dev'
import styles from '../css/StoreGoodsListPageCss'

class StoreGoodsListPage extends React.Component{

  /* 左侧FlastList key */
  _left_extraUniqueKey(item ,index){
    return "left"+index+item;
  }
  /* 右侧FlastList key */
  _right_extraUniqueKey(item ,index){
    return "right"+index+item;
  }

  /* 构造函数 */
  constructor(props){
    super(props)
    this.state = {

      groupLength:0,

      leftData:[],
      /* 右侧数据 */
      rightData:[],

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

    }
  }

  /* 获取指定商店所有商品信息 */
  componentDidMount(){
  const {route} = this.props;
  const {storeId} = route.params;
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


      

      let b  = {8:81}

      this.setState({
          rightData: _rightData,
          leftData: _leftData,
          section: _section,
          sectionTo: sectionMap
      })

      this.props.changeData2(_rightData)
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



  //刷新购物车  +
  refreshPurchaseQuantity=(item)=>{
      //获取 rightData
      // var _rightData = this.state.rightData;
      var _rightData = this.props.data;
      for(var i = 0 ; i<_rightData.length ; i++){
          if(item.goodsId == _rightData[i].goodsId){
              _rightData[i].purchaseQuantity =  parseInt(_rightData[i].purchaseQuantity)+1 ;
              this.setState({rightData: _rightData});
              this.props.changeData(_rightData)
          }
      }
  }


  /* 刷新购物车 - */
  refreshPurchaseQuantitied=(item)=>{
    /* 获取 rightData */
    // var _rightData = this.state.rightData;
    var _rightData = this.props.data;
    for(var i = 0 ; i<_rightData.length ; i++){
      /* 找到减少的商品做运 --运算 */
        if(item.goodsId == _rightData[i].goodsId){
          if(parseInt(_rightData[i].purchaseQuantity)>=1){
          _rightData[i].purchaseQuantity =  parseInt(_rightData[i].purchaseQuantity)-1 ;
          this.setState({rightData: _rightData});
          this.props.changeData(_rightData)
          }
        }
    }
  }


  /* 关上抽屉 */
  closeControlPanel = () => {
    this._drawer.close()
  };

  /* 打开抽屉 */
  openControlPanel = () => {
    this._drawer.open()
  };

    
  /* 视图 */
  render(){
    const {width,height} = Dimensions.get('window')
    var leftSideWidth = width*(1/5);
    var rightSidiWidth = width*(4/5);
    var rightSideTextWidth = rightSidiWidth-120-10;
    return(
      /* 抽屉 */
      <Drawer
      /* 抽屉方向 top／left／right／bottom */
      side="bottom" 
      /* 默认打开/关上抽屉 */
      open={false}
      /* 点击内容处 会关闭抽屉 */
      tapToClose={true}
      /* 抽屉出现的方式：overlay：抽屉覆盖内容 static:抽屉一只在内容后面 打开的时内容会滑动，displace：不会覆盖的 进出 */
      type='overlay'
      /* 抽屉占整个屏幕的百分比（1-0.6=0.4） */
      openDrawerOffset={0.5}
      /* 关闭抽屉后 抽屉在屏幕中的显示比例 */
      closedDrawerOffset={0}
      /* styles={drawerStyles}//抽屉样式，背景色 透明度，阴影啥的 */
      ref={(_drawer) => this._drawer = _drawer}
      /* 抽屉样式，背景色 透明度，阴影啥的 */
      styles = {styles.drawerStyle}
      /* 抽屉内容 */
      content={<ShoppingListContent  />}
      >
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
              showsVerticalScrollIndicator = {false}
              keyExtractor = {this._right_extraUniqueKey}
              onViewableItemsChanged = {this._on_right_Scroll}
              data = {
                  // this.state.rightData
                  this.props.data
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
                              // onPressIn={this.refreshPurchaseQuantitied.bind(this,item)}

                              onPress={()=>{this.refreshPurchaseQuantitied(item)}}
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
                              // onPressIn={this.refreshPurchaseQuantity.bind(this,item)}
                              onPress={()=> this.refreshPurchaseQuantity(item) }
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
          {/* 底部结算按钮 */}
          <TouchableOpacity onPressIn={()=>{this.openControlPanel()}}>
            <Text style ={styles.tips}>
              购买列表
            </Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    )
  }
}

/* 监听redux */
const mapState = state => ({
  data: state.rightData
})

/* 改变redux state */
const mapDispatch = dispatch => ({
  changeData(data) {
    dispatch(Synchronous(data))
  },
  changeData2(data){
    dispatch(rightData(data))
  }
})

/* 连接 redux */
export default connect(
  mapState,
  mapDispatch
)(StoreGoodsListPage)