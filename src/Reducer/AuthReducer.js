import {USER_LOADING,USER_LOADED,USER_AUTH_ERR,REGISTER_ERROR,REGISTER_SUCCESSFUL,LOGIN_ERROR,LOGIN_SUCCESSFUL, LOGOUT} from '../Action/type'
const initialState = {
    token:localStorage.getItem('token'),
    isLoading:false,
    isAuthenticated:false,
    user:{}
}

const AuthReducer = (state=initialState,action)=>{
    switch (action.type) {
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
            break;
         case USER_LOADED:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload.user
                
            }
            break;

         case REGISTER_SUCCESSFUL:
         case LOGIN_SUCCESSFUL:    
              localStorage.setItem('token',action.payload.token)
             return{
                 ...state,
                 isLoading:false,
                 token:action.payload.token,
                 isAuthenticated:true,
                 user:action.payload.user
                 
             }
             break;
          case USER_AUTH_ERR:
          case REGISTER_ERROR: 
          case LOGIN_ERROR:
          case LOGOUT:       
              localStorage.removeItem('token')
              return{
                  ...state,
                  isLoading:false,
                  isAuthenticated:false,
                  token:'',
                  user:{}
                 }      
        default:
            return state
            break;
    }
}

export default AuthReducer
