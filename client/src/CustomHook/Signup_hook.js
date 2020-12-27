import {useState, useEffect} from 'react'

const useSignUp = (SignUp, Validation,clearError )=>{
  const [state, setstate] = useState({
      userName:'',
      email:'',
      password:'',
      password2:''
  })
  const [error, seterror] = useState({})
  const [boolean, setboolean] = useState(false)
   
  const handleChange = (e)=>{
      clearError()
      setstate({
          ...state,
          [e.target.id]:e.target.value
      })
    
   
  }
  useEffect(() => {
    if(boolean){
      if(Object.keys(error).length === 0 && error.constructor === Object){
         SignUp(state)  
       }
   }
  }, [error])

  
  

  const handleSubmit = (e)=>{
      e.preventDefault()
      seterror(Validation(state))
      setboolean(true)
    
    
}

  return {state,handleChange, handleSubmit,error}
}

export default useSignUp