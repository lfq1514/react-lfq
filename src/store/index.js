/**
 * store模块目录结构
 *      reducer  存放每一个模块的reducer
 *               home.js
 *               personal.js
 *               ......
 *               index.js   所有模块的集合
 *
 *      action   存放每一个模块需要进行的派发任务(ActionCreator)
 *               home.js
 *               personal.js
 *               ......
 *               index.js    所有action的集合
 *      action-types.js   所有派发任务的行为标识，在这里统一管理
 *
 *      index.js   创建store
 */


 /**
  * 创建store
  */
 import {createStore} from 'redux'
 import reducer from './reducer/index'
 let store= createStore(reducer)
 export default store
