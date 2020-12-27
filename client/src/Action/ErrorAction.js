import {CLEAR_ERROR,GET_ERROR} from './type'

//GET ERROR
export const getError = (mssg,status,id=null)=>{
    return dispatach =>{
      dispatach({type:GET_ERROR, payload:{mssg, status, id}})
    }
}


//CLEAR ERROR
export const clearError = ()=>{
    return dispatach=>{
        dispatach({type:CLEAR_ERROR})
    }
}