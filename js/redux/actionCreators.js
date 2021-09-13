// import actionTypes from './actionTypes'
import actionTypes from './actionTypes'

/* 同步购买的商品到购物抽屉 */
export function Synchronous(data) { // 统一管理action
  return {
    type:  actionTypes.SynchronousShopping,
    data: data
  }
}

export function rightData(data){
  return{
    type: actionTypes.rightData,
    data: data
  }
}

export function ShoppingCarToRightData(data){
  return {
    type: actionTypes.ShoppingCarToRithtData,
    data: data
  }
}

export function updateUserInfo(data){
  return{
    type:actionTypes.updateUserInfo,
    data: data
  }
}



