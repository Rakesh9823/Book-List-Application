import React from 'react'
import "../signup/SignUp.css"
const SignUp = () => {
  return (
    <div className='signUpContainer'>
        <div className='signUpContent'>
            <img src={require("../images/icon-edit-11.jpg")} id='editLogo' alt="edit logo"  height="60px" width="60px" />
            <h2>Register</h2>
            <form >
                <div className='name'>
                    <input type="text" placeholder='username' />
                </div>
                <div className='pass'>
                    <input type="password" placeholder='password' />
                </div>
                <div className='confirm-pass'>
                    <input type="password" placeholder='confirm password' />
                </div>

                <button className='registerBtn'>REGISTER</button>
                <button className='memLogin'>Member Login</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp