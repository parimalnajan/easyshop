import {createStore, applyMiddleware} from 'redux'
import reducer from "./reducers"

const store =createStore(reducer,{user:{testmsg:"asdf"}});

export default store ;