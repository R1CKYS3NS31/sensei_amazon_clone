import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
  return (
    <div className="login">
        <Link to={'/'}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login_logo" />
        </Link>
    </div>
  )
}
