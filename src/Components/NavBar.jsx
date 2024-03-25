import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to="/login">Login</Link>
        </nav>

    </div>
  )
}

export default NavBar