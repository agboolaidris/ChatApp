import {GET_ERROR, CLEAR_ERROR} from './type'
export const getError = (payload, id )=>{
    return (dispatch)=>{
        dispatch({type:GET_ERROR, payload, id})
    }
}

export const clearError = ()=>{
    return (dispatch)=>{
        dispatch({type:CLEAR_ERROR})
    }
}