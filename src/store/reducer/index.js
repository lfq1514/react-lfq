/**
 * reducer 集合  把每一个模块单独设置的reducer整合到一块
 *
 * 为了保证合并reducer过程中每个模块管理的状态不会冲突，reducer在合并的时候把容器中的状态进行分开管理，（以合并reducer时设置的属性名来 分模块管理）
 * 合并后的状态如下：
 * state={
 *     home:{
 *     m:0,n:0
 *     },
 *     personal:{
 *     info:{}
 * }
 * }
 *
 * combineReducers用来合并reducer
 */
import {combineReducers} from 'redux'
import home from './home'
import personal from './personal'

let reducer =combineReducers ({
    home,
    personal
})
export default reducer
