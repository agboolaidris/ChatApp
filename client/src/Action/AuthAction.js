import axios from 'axios'
import {REGISTER_SUCCESSFUL,LOGOUT_SUCCESSFUL,LOGIN_SUCCESSFUL,USER_LOADING,USER_LOADED,AUTH_ERROR, LOGIN_ERROR, REGISTER_ERROR} from './type'
import {getError} from './ErrorAction'

export const LoadUser = ()=>{
  return async(dispatch, getState)=>{
     try{  
      //user loading
         dispatch({type:USER_LOADING})
         //get token from the local storage
        const token = getState().Auth.token
        
       if(token){
         await axios.get('http://localhost:5000/user',{headers:{token:token}})
         .then(res=>{ console.log(res.data)
          dispatch({type:USER_LOADED,payload:res.data})
         })
         .catch(err=>{
          dispatch(getError(err.response.data, err.response.status))
          console.log(err)
             dispatch({type:AUTH_ERROR})
         })
       }


    }
    catch(err){
      console.log(err.response)
    }
  }
}

export const Register = (user)=>{
  
    return async(dispatch)=>{
    await axios.post('http://localhost:5000/user/register', user)
     .then(async(res)=>{
      
      await axios.post('http://localhost:5000/user/login', user)
      .then(res=>{
       dispatch({type:LOGIN_SUCCESSFUL, payload:res.data})
      })
      .catch(err=>{
        dispatch(getError(err.response.status, err.response.data))
        dispatch({type:LOGIN_ERROR})
      })
     })
     .catch((err)=>{
       dispatch(getError(err.response.data, err.response.status, 'RESGISTRATION FAIL'))
       dispatch({type:REGISTER_ERROR})
     })
    }
}

export const login = (user)=>{
  console.log(user)
  return async dispatch=>{
       await axios.post('http://localhost:5000/user/login', user)
       .then(res=>{
        
         localStorage.setItem('token',res.data.token)
         dispatch({type:LOGIN_SUCCESSFUL, payload:res.data})
       })
       .catch(err=>{
        dispatch(getError(err.response.data,err.response.status, 'LOGIN FAIL'))
       })
  }
}

export const logout = ()=>{
  return (dispatch)=>{
      dispatch({type:LOGOUT_SUCCESSFUL})
  }
}

