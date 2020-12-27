import axios  from 'axios'
import { USER_LOADED } from './type'
import {REGISTER_SUCCESSFUL,LOGOUT_SUCCESSFUL,LOGIN_SUCCESSFUL,USER_LOADING,USER_LOADED,AUTH_ERROR} from './type'

export const loadUser = ()=>{

  return async(dispatch, getState)=>{
    try{  
      //user loading
         dispatch({type:USER_LOADING})
         //get token from the local storage
        const token = getState().Auth.token
       if(token){
         await axios.get('http/localhost:5000/user',{headers:{token:token}})
         .then(res=>{
           dispatch({type:USER_LOADED,payload:res.payload})
         })
         .catch(err=>{
             dispatch({type:AUTH_ERROR, payload:err.data})
         })
       }


    }
    catch(err){
      console.log(err)
    }
  }
}

export const SignUp = (user)=>{
  
    return async(dispatch)=>{
    await axios.post('http://localhost:5000/user/register', user)
     .then(async(res)=>{
     await axios.post('http://localhost:5000/user/login', user)
      .then(res=>{
       localStorage.setItem('token', res.data.token)
       dispatch({type:LOGIN, payload:res.data.user})
      })
      .catch(err=>{
        console.log(err)
      })
     })
     .catch((err)=>{
       console.log(err)
     })
    }
}

export const login = (user)=>{
  console.log(user)
  return async dispatch=>{
       await axios.post('http://localhost:5000/user/login', user)
       .then(res=>{
        
         localStorage.setItem('token',res.data.token)
         dispatch({type:LOGIN, payload:res.data.user, token:res.date.token})
       })
       .catch(err=>{
         console.log(err)
       })
  }
}

export const logout = ()=>{
  return (dispatch)=>{
      dispatch({type:LOGOUT , payload:'', token:''})
  }
}

