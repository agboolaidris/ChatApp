import React, {useEffect} from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from './Component/Auth/SignIn/Login';
import Sign_up from './Component/Auth/SignUp/Sign_up'
import Dashboard from './Component/Dashboard/Dashboard';
import Navbar from './Component/Layout/Navbar/Navbar'
import {LoadUser } from './Action/AuthAction' 
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

function App({LoadUser}) {

  useEffect(() => {
    
     LoadUser()
  }, [LoadUser])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <ProtectedRoute exact path='/' component={Dashboard}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Sign_up}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect(null,{LoadUser})(App);
