import React from 'react'
import "../login/LogIn.css"
const LogIn = () => {
  return (
    <div className='logInContainer'>
        <div className='content'>
        <img src={require("../images/th.jpeg")} id='personLogo' alt="person logo" height="60px" width="60px" />
        <h2>Member Login</h2>
        <form>
            <div className='username'>
                <input type="text" placeholder='username' />
            </div>

            <div className='password'>
                <input type="password" placeholder='password' />
            </div>

            <button className='logInBtn'>LOGIN</button>

            <button className='forgot'>Forgot Password ?</button>
        </form>
        </div>
    </div>
  )
}

export default LogIn