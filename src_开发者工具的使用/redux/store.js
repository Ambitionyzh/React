import { createStore,applyMiddleware, combineReducers } from "redux";

import countReducer from './reducers/count'

import personReducer from "./reducers/person";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducer,
    composeWithDevTools(applyMiddleware(thunk)
    ))