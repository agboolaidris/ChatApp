import { combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrReducer'


const RootReducer = combineReducers({
    Auth:AuthReducer,
    Error:ErrorReducer
    
})

export default RootReducer