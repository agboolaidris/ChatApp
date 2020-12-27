import axios  from 'axios';
import {REGISTER_SUCCESSFUL,LOGOUT_SUCCESSFUL,LOGIN_SUCCESSFUL,USER_LOADING,USER_LOADED,AUTH_ERROR, LOGIN_ERROR, REGISTER_ERROR} from './type'
import {getError} from './ErrorAction'

export const LoadUser = ()=>{

  return async(dispatch, getState)=>{
    try{  
      //user loading
         dispatch({type:USER_LOADING})
         //get token from the local storage
        const token = getState().Auth.token
        console.log(token)
       if(token){
         await axios.get('http/localhost:5000/user',{headers:{token:token}})
         .then(res=>{
          console.log(res)
           dispatch({type:USER_LOADED,payload:res.payload})
         })
         .catch(err=>{
           console.log(err)
           dispatch(getError(err.response.data, err.response.status))
             dispatch({type:AUTH_ERROR})
         })
       }


    }
    catch(err){
      console.log(err)
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
         dispatch({type:LOGIN_SUCCESSFUL, payload:res.data.user, token:res.date.token})
       })
       .catch(err=>{
         console.log(err)
       })
  }
}

export const logout = ()=>{
  return (dispatch)=>{
      dispatch({type:LOGOUT_SUCCESSFUL , payload:'', token:''})
  }
}

