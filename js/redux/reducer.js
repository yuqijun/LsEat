
import actionTypes from './actionTypes'
const defaultState = { // 初始化state
  shoppingList:[],
  // 所有商店商品列表
  allGoodsList:[],

  //购物车列表
  shoppingCar:[],

  rightData:[],

  user:'',

}

export default (state = defaultState, action) => {
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


  return state



} 