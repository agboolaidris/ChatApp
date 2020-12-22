import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

const RootReducer = combineReducers({
    Auth:AuthReducer
})

export default RootReducer