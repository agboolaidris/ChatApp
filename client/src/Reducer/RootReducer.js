import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrrorReducer'

const RootReducer = combineReducers({
    Auth:AuthReducer,
    Error:ErrorReducer,

})

export default RootReducer