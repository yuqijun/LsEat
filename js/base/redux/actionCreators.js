
import actionTypes from './actionTypes'

export function ADD(data){
  return {
    type: actionTypes.ADD,
    data: data
  }
}


// /* 同步购买的商品到购物抽屉 */
// export function Synchronous(data) { // 统一管理action
//   return {
//     type:  actionTypes.SynchronousShopping,
//     data: data
//   }
// }






