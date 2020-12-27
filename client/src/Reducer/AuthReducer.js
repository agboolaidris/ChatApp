import {AUTH_ERROR,
        LOGIN_SUCCESSFUL,
        LOGOUT_SUCCESSFUL,
        REGISTER_SUCCESSFUL,
        USER_LOADED,
        USER_LOADING,
        REGISTER_ERROR,
        LOGIN_ERROR } from '../Action/type'
const initialState = {
    token:localStorage.getItem('token'),
    user:null,
    isloading:false,
    isAuthenticated:null
}


const AuthReducer = (state=initialState, action)=>{
switch(action.type){
    case USER_LOADING:
        return{
            ...state,
            isloading:true
        }
        break;
     case USER_LOADED:
         return{
             ...state,
             isloading:false,
             isAuthenticated:true,
             user:action.payload
         }   
        case LOGIN_SUCCESSFUL :
         case REGISTER_SUCCESSFUL:  
            localStorage.setItem('token',action.payload.token) 
            return {
               ...action.payload,
               isloading:false,
               isAuthenticated:true,
            }
         case LOGOUT_SUCCESSFUL:
         case AUTH_ERROR:
         case REGISTER_ERROR:
         case LOGIN_ERROR:    
             localStorage.removeItem('token')
             return{
              ...state,
              token:null,
              user:null,
              isAuthenticated:false,
              isloading:false,
             }      
    default:
        return state
        break;
}
}

export default AuthReducer