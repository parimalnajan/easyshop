import {combineReducers} from 'redux'

import user from './userReducer'
import list from './listReducer'

export default combineReducers({
        user,
        list
});