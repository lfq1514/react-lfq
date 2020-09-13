import React from 'react'
import store from '../store/index'
import action from '../store/action/index'
class Personal extends React.Component {
    constructor() {
        super()
        let { name, age } = store.getState().personal.info
        this.state = {
            name, age
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('personal--------')
            let { name, age } = store.getState().personal.info
            this.setState({
                name, age
            })
        })
    }
    render() {
        return (
            <div onClick={this.click}>
                <p>
                    personal-n:{this.state.name}
                </p>

            </div>
        )

    }
    click(){
        store.dispatch(action.personal.test1())
    }
}
export default Personal