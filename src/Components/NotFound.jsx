import React from 'react'
import { useLocation } from 'react-router'

function NotFound() {
  let location = useLocation();
  return (
    <>
        <h1>404 Not Found</h1>
        <p>The page {location.pathname} could not be found.</p>
    </>
  )
}

export default NotFound