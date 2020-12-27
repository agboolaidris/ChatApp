import {Route,Redirect} from 'react-router-dom'
import React,{useEffect} from 'react'
import {connect} from 'react-redux'

 function ProtectedRoute({component:Component,auth, ...rest}) {
    console.log(auth)
     
     
     const {isAuthenticated, token} = auth
     console.log(isAuthenticated) 
    
    
    return (
        <Route {...rest} render={
            (props)=>{
                if(isAuthenticated){
                 return  <Component {...props} />
                }
                else{
                     return <Redirect to='/login'/>
                }
            }
        } />
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.Auth,
    };
  };
  export default connect(mapStateToProps) (ProtectedRoute)
