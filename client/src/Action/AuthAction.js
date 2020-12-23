import axios  from 'axios'

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