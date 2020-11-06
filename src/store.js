import {createStore, applyMiddleware} from 'redux'
import reducer from "./reducers"

const store =createStore(reducer,{testmsg:"asdf"});

export default store ;