
const Validation = (state)=>{
    const err = {}
     if(state.userName.length < 6){
        err.mssg ='username must be greater than 5'
     }


    if(state.password.length < 6){
         err.mssg='password must be greater than 5'
     }
      if(state.password !== state.password2){
          err.mssg ='password does not match'
      }
     const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!reg.test(state.email)) {
          err.mssg='invalid email address'
      }
      
 return err
}

export default Validation