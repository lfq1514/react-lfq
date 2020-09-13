import React from 'react'
import '../static/less/todo.less'
import { Table, Tag, Space, Button } from 'antd';

class List extends React.Component {
    constructor(){
        super()
        this.state={
            listData:[
                {name:"zs"},
                {name:"zs"},
                {name:"zs"},
            ]

        }
    }
    render(){
        return

        (this.state.map((item)=>{
            <li>{item.name}</li>
            }))

    }
}

class Head extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className='title'>
            <List></List>
        </div>
    }

}
export default Head




