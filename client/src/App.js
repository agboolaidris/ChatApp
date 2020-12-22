import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Sign_up from './Component/Auth/SignUp/Sign_up'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>
        <Route path='/' component={Sign_up}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
