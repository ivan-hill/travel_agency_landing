import React, { useState } from "react";
import auth0 from 'auth0-js';
import params from './auth0-param.json'
import './Login.css';

const Login = () => {
  var auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: 'token id_token'
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login('aroratushii@gmail.com','12345@Six')
  };

 const login = ( username,password )=>{
    auth0Client.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username: username,
      password: password,
      scope: 'openid'
    }, (err, res) => {
      if( err ) console.log("ERR===",err);
      console.log("====RES",res);
    })
  }
  return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          
        { /* Header */}
          <div className="fadeIn first p-2">
            <h2>Login</h2>
          </div>

          { /* Login Form */}
          <form onSubmit={onSubmitHandler}>
            <input id="login" className="fadeIn second" name="login" placeholder="login" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            <input id="password" className="fadeIn third" name="login" placeholder="password"  type="password" value={password} onChange={(e) => { setPassword(e.target.value)  }}/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
          </form>
            
        </div>
      </div>
  );
};



export default Login;