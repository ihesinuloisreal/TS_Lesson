import React from 'react'
import { useState } from 'react'

export const Login = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false)

    const handleLogin = () => {
        setIsloggedIn(!isLoggedIn)
    }
    const handleLogout = () => {
        setIsloggedIn(!isLoggedIn)
    }
  return (
    <div>
        { isLoggedIn ? 
        <button onClick={handleLogout}>Logout</button> 
        : <button onClick={handleLogin}>Login</button>}

        { isLoggedIn? <form><input placeholder='Welcome'/></form> : null}
        
        <div>User is {isLoggedIn ? 'logged in':'logged out'} </div>
    </div>
  )
}
