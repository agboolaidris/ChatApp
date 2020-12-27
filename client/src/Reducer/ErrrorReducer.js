import {CLEAR_ERROR, GET_ERROR } from '../Action/type'
const initialstate ={
    mssg:'',
    status:'',
    id:''
}

const ErrorReducer = (state=initialstate, action)=>{
    switch (action.type) {
        case GET_ERROR:
            return{
                mssg:action.payload.mssg,
                status:action.payload.status,
                id:action.payload.id
            }

            case CLEAR_ERROR:
                return{
                    mssg:'',
                    status:'',
                    id:''
                }
            
    
        default:
           return state
            break;
    }
}

export default ErrorReducer