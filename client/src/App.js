import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Sign_up from './Component/Auth/SignUp/Sign_up'
import Navbar from './Component/Layout/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Sign_up}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
