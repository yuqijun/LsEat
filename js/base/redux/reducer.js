
import actionTypes from './actionTypes'
const defaultState = { // 初始化state
  count:2
}

/**
 * @Param  action        传进来的命令
 * @Param  defaultState  reducer中的 defaultState
 * 
*/
export default (state = defaultState, action) => {
  if(action.type == actionTypes.ADD){
    var count=count+action.data
    console.log("进入到redux :"+action.data)
  }
  return state
} 