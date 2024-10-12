import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'> 
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsingup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
      </div>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, i agree to the terms of use & privacy</p>
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
    </div>
    </div>
  )
}

export default LoginSignup
