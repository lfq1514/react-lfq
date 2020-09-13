import React from 'react'
import action from '../store/action/index'
import {connect} from 'react-redux'
/**
 * 相对于传统的redux，我们做的步骤优化
 * 1，导出的不在是我们创建的组件，而是基于connect构造后的高阶组件
 */

class Home extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        console.log(this.props)
        // let { n, m } = store.getState().home
        // this.state = {
        //     n, m
        // }
    }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         let { n, m } = store.getState().home
    //         this.setState({
    //             n, m
    //         })
    //     })
    // }
    render() {
        return (
            <div  onClick={this.props.test1}>
                <p>
                    home-n:{this.props.n}
                </p>

            </div>
        )

    }
    click(){
        console.log('11111111')
        // store.dispatch(action.home.test1({title:'home'}))
    }
}
//把redux容器中的状态信息遍历，赋值给当前组件的属性
//state就是redux容器中的状态信息
let mapStateToProps=(state)=>{
    console.log('----------')
    console.log(state)
    //返回的是什么，就把返回值挂载到当前组件的属性上（通过this.props），redux中存储了很多信息，只需返回想要的值就行
    return {
        ...state.home
    }

}
//把redux中dispatch派发行为遍历，也赋值给组件的属性
//dispatch:store中存储的dispatch方法
// let mapDispatchToProps=(dispatch)=>{
//     //返回的是什么，就把返回值挂载到当前组件的属性上(一般我们挂载一些方法，这些方法中完成dispatch派发的任务)
//     return {
//         add(){
//             dispatch(action.home.test1({title:'home'}))
//         }
//     }
// }
// export default Home
// export default connect(mapStateToProps,mapDispatchToProps)(Home)
//简化
//react-redux帮我们做了一件事，把action-creator中编写的方法（返回action对象的方法），自动构建成diaptach派发任务的方法，也就是mapDispatchToProps这种格式
export default connect(mapStateToProps,action.home)(Home)