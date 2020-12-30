import {Route,Redirect} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'

 function ProtectedRoute({component:Component,...rest}) {
     console.log(rest.isAuthenticated)
  
return ( !rest.isAuthenticated ? <Redirect to='/login' />  
       : <Route {...rest} render={
            (props)=>{
              return  (<Component {...props} /> )
            }  } />
        )
}
const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.Auth.isAuthenticated,
      isloading:state.Auth.isloading
    };
  };
  

  export default connect(mapStateToProps) (ProtectedRoute)
