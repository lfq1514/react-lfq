/**
 * home模块的reducer
 * state：原始状态的信息
 * action：dispatch派发的行为标识对象
 */

 import * as TYPE from '../action-types'

export default function home(state={n:0,m:0},action){
    switch(action.type){
        case TYPE.HOME_TEST1:
            state={...state,n:state.n+1};
            break;
        case TYPE.HOME_TEST2:
            state={...state,m:state.m+1};
            break;
            default:
                break
    }
    return state

}