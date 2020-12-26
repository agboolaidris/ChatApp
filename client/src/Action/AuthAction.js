import axios  from 'axios'
import {CHECK_LOGIN} from './type'

export const CheckLogin =()=>{
  return async(dispatch)=>{
let token =  localStorage.getItem('token')

if(token === null){
    localStorage.setItem('token',"")
   token = ""
  }

   const tokenRes = await axios.post('http://localhost:5000/user/tokenIsValid',null,{headers:{'token':token}})
    
   if(tokenRes.data){
      axios.get('http://localhost:5000/user',null,{headers:{'token':token}})
       .then(res=>{
         console.log(res)
        dispatch({action:CHECK_LOGIN, payload:res.data, token:token})
       }
       )
       .catch(err=>{
         console.log(err)
       })
      
    }
}
}

export const SignUp = (user)=>{
    console.log(user)
    return(dispatch)=>{
     axios.post('http://localhost:5000/user/register', user)
     .then((res)=>{
       console.log(res)
     })
     .catch((err)=>{
       console.log(err)
     })
    }
}

