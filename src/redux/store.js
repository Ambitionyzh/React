import { createStore,applyMiddleware} from "redux";
//引入汇总至有的reducer
import reducer from './reducers'
//引入redux-thunk，用于支持异步action
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from 'redux-thunk'

//汇总所有的reducer变为一个总的reducer

export default createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)
    ))