import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';

import Login from './Components/DepLogin/Login'
import  DefaultLogin  from './Components/AuthLogin/DefaultLogin';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path='/simpleLogin'>
          <Login />
        </Route>

        <Route  path='/'>
          <DefaultLogin />  
        </Route>

      </Switch>
    </BrowserRouter>
  );
  
 
}



export default App;
