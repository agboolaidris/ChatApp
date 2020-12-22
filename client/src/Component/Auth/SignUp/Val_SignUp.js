
const Validation = (state)=>{
    const err = {}
     if(state.userName.length < 6){
        err.userName ='username must be greater than 5'
     }


    if(state.password.length < 6){
         err.password='password must be greater than 5'
     }
      if(state.password !== state.password2){
          err.password2 ='password does not match'
      }
     const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!reg.test(state.email)) {
          err.email='invalid email address'
      }
      
 return err
}

export default Validation