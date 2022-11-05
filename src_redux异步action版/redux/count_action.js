import { INCREMENT,DECREMENT } from "./constant"
import store from './store'
//同步action的值为Object类型的一般对象
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})
//异步action的值为函数
export const createIncrementAsyncAction = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
        store.dispatch(createIncrementAction(data))
        },time)
    }
}