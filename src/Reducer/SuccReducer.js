import {GET_SUCCESS,CLEAR_SUCCESS} from '../Action/type'
const initialState= {
    msg:'',
    status:'',
    id:'',
}

const SuccessReducer = (state=initialState,action )=>{
    switch (action.type) {
        case GET_SUCCESS :
             return {
                 ...state,
                 msg:action.payload && action.payload.data.msg,
                 id:action.id
             } 
            break;
        case CLEAR_SUCCESS:
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

export default SuccessReducer