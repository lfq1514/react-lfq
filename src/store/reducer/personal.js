/**
 * personal模块的reducer
 * state：原始状态的信息
 * action：dispatch派发的行为标识对象
 */

import * as TYPE from '../action-types'

export default function personal(state={info:{name:0,age:0}},action){
    switch(action.type){
        case TYPE.PERSONAL_TEST1:
            state={...state,name:state.info.name+1};
            break;
        case TYPE.PERSONAL_TEST2:
            state={...state,age:state.info.age+1};
            break;
            default:
                break
    }
    return state

}