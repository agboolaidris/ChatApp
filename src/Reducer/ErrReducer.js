import {GET_ERROR,CLEAR_ERROR} from '../Action/type'
const initialState= {
    msg:'',
    status:'',
    id:'',
}

const ErrorReducer = (state=initialState,action )=>{
    switch (action.type) {
        case GET_ERROR :
             return {
                 ...state,
                 msg:action.payload.data.msg,
                 status:action.payload.status,
                 id:action.id
             } 
            break;
        case CLEAR_ERROR:
            return{
                ...state,
                msg:'',
                status:'',
                id:''
            }  
            break;  
    
        default:
          return  state
            break;
    }
}

export default ErrorReducer