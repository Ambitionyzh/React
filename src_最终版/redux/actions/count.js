import { INCREMENT,DECREMENT } from "../constant"
import store from '../store'
//同步action的值为Object类型的一般对象
export const increment = data =>({type:INCREMENT,data})
export const decrement = data =>({type:DECREMENT,data})
//异步action的值为函数
export const incrementAsync = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
        store.dispatch(increment(data))
        },time)
    }
}