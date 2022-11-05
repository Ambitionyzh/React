
import React, { Component } from 'react'


import { createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from "../../redux/actions/count";

import { connect } from "react-redux";

// 1.mapStateToProps函数的返回的是一个对象
//2.对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
// 3.mapStateToProps用于传递状态
// const mapStateToProps=state=>({count:state})

// //mapDispatchToProps函数的返回的是一个对象：
// //对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——操作状态的方法
// //mapDispatchToProps用于传递操作状态的方法
// const mapDispatchToProps = dispatch =>(
//     {
//         jia:(number)=>{
//         dispatch(createIncrementAction(number))
//         },
//         jian:(number)=>{
//             dispatch(createDecrementAction(number))
//         },
//         jiaAsync:(number,time)=>{
//             dispatch(createIncrementAsyncAction(number,time))
//         }

//     }
//     )
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

class Count extends Component {
    state = {carName:'wuhu'}

    
    increment = ()=>{
    const {value} = this.selectNumber
    this.props.jia(value*1)
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }

    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count%2 !==0){
            this.props.jia(value*1)
        }
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }

render() {
    return (
        <div>
            <h1>当前求和为:{this.props.count}</h1>
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
export default connect(
    state =>({count:state.he,
            renshu:state.he.length}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(Count)