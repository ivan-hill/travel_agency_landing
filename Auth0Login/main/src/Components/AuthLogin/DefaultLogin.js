import React from 'react'
import "./DefaultLogin.css"
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

const DefaultLogin = () => {
    return (
        <div className="DefaultLogin d-flex align-items-center justify-content-center h-100 w-100">
         <LoginButton/>
         <LogoutButton/>
         <Profile />   
        </div>
    )
}

export default DefaultLogin;
