import { combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrReducer';
import SuccessReducer from  './SuccReducer'


const RootReducer = combineReducers({
    Auth:AuthReducer,
    Error:ErrorReducer,
    Success: SuccessReducer
    
})

export default RootReducer