import {GET_SUCCESS, CLEAR_SUCCESS} from './type'
export const getSuccess = (payload, id )=>{
    return (dispatch)=>{
        dispatch({type:GET_SUCCESS, payload, id})
    }
}

export const clearSuccess = ()=>{
    return (dispatch)=>{
        dispatch({type:CLEAR_SUCCESS})
    }
}