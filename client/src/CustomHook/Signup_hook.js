import {useState} from 'react'

const useSignUp = ()=>{
  const [state, setstate] = useState({
      userName:'',
      email:'',
      password:'',
      password2:''
  })

  const handleChange = (e)=>{
      setstate({
          ...state,
          [e.target.value]:e.target.id
      })
  }

  return {state,handleChange}
}

export default useSignUp