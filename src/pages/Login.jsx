import React, { useRef } from 'react';
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      usename: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form} >
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="example@example.com" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log In
          </button>
          <a href="/">Forgot my password</a>
          <button className="secondary-button signup-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;