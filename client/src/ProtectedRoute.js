import {Route,Redirect} from 'react-router-dom'
import React,{useEffect} from 'react'
import {connect} from 'react-redux'

 function ProtectedRoute({component:Component,isAuthenticated,...rest}) {
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


  export default ProtectedRoute
