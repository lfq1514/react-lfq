import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import store from './store/index'
import {Provider} from 'react-redux'
import Head from './component/Head'
import 'antd/dist/antd.css'
//provider 根组件（基于上下文）
//  当前整个项目都在provider组件下，作用就是把创建的store可以供内部任何后代组件使用
//connect 高阶组件
//

/**
 * ReactDOM.render([jsx],[container],[callback])//把jsx元素渲染到页面中
 * jsx :react虚拟元素
 * container：容器，我们想把元素放到页面中的哪个容器中
 * callback： 当把内容放到页面中呈现触发的回调函数
 *  */
let root=document.querySelector('#root')

render(<Provider store={store}>
<Head></Head>
</Provider>,root)
