import React,{useEffect} from 'react'
import {BrowserRouter,Route,useLocation,Switch} from 'react-router-dom'
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Navbar from './Component/Layout/Navbar/Navbar';
import {checkAuth} from './Action/AuthAction'
import {connect} from 'react-redux';
import ProtectedRoute from './ProtectRoute'
import Dashboard from './Component/Dashboard/Dashboard';
function App({checkAuth,isAuthenticated}) {
  const location = window.location.pathname
  console.log(location)
    useEffect(() => {
        checkAuth()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
      {
        isAuthenticated && <Navbar />
      }  
      <Switch>
        
      <ProtectedRoute exact path='/' component={Dashboard}/>
      <Route path='/login'  component={Login} />
      <Route path='/register'  component={Register} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
      isAuthenticated:state.Auth.isAuthenticated
  }
}


export default connect(mapStateToProps, {checkAuth})(App);
