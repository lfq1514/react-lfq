/**
 * 每个模块单独的action-creator，就是把dispatch开发时需要传递的action行为对象统一封装处理(react-redux中会体会到好处)
 */
import * as TYPE from '../action-types'
 let home={
     test1(){
         //返回的就是dispatch需要派发对象
         return {
             type:TYPE.HOME_TEST1,
         }
     },
     test2(){
         //返回的就是dispatch需要派发对象
         return {
             type:TYPE.HOME_TEST2

         }
     }
 }
 export default home