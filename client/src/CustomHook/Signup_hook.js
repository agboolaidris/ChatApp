import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const useSignUp = (SignUp, Validation,clearError,  isAuthenticated )=>{
  const [state, setstate] = useState({
      userName:'',
      email:'',
      password:'',
      password2:''
  })
  const [error, seterror] = useState({})
  
   const history = useHistory()
  const handleChange = (e)=>{
      clearError()
      setstate({
          ...state,
          [e.target.id]:e.target.value
      })
    
   
  }
  useEffect(() => {
   if(isAuthenticated){
     history.push('/')
   }
    

  }, [isAuthenticated])

  
  

  const handleSubmit = (e)=>{
      e.preventDefault()
      seterror(Validation(state))
      SignUp(state)}

  return {state,handleChange, handleSubmit,error}
}

export default useSignUp