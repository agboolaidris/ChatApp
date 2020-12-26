import {CHECK_LOGIN, CHECK_LOGIN_ERR} from '../Action/type'
const initialState = {
    token:'',
    user:{},
}


const AuthReducer = (state=initialState, action)=>{
switch(action.type){
    case CHECK_LOGIN:
        console.log(action.token)
        return{
            token:action.token,
            user:action.payload
        }
        break;
        case CHECK_LOGIN_ERR:
            console.log(action.token)
            return{
                token:action.token,
                user:action.payload
            }
            break;
    default:
        return state
        break;
}
}

export default AuthReducer