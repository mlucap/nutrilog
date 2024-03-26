import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
        </nav>

    </div>
  )
}

export default NavBar