import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction } from '../../redux/count_action'
import { createDecrementAction } from '../../redux/count_action'
export default class Count extends Component {
    state = {carName:'wuhu'}

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
    }
    decrement = ()=>{
        const {value} = this.selectNumber
        const {count} = store.getState()
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        if(count%2 !==0){
            store.dispatch(createIncrementAction(value*1))        }
    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))        }, 500);
    }

render() {
    return (
        <div>
            <h1>当前求和为:{store.getState()}</h1>
            <select ref={c => this.selectNumber = c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

            </select>
            <button onClick={this.increment}>+</button> 
            <button onClick={this.decrement}>-</button>  
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>  
            <button onClick={this.incrementAsync}>异步加</button>   

        </div>
    )
}
}
