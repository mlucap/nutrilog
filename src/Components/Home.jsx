import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/Home.scss"

function Home() {
  return (
    <>
      <div id="parent">
        <div className="child dark left">
          <div className='homeTitleContainer'>
            <h1 id='title' className='colourViolet'>Nutrilog</h1>
            <p>Every Calorie Counts.</p>
          </div>

          <div className='center'>
            {/* &#8594; = → */}
            <Link className="navLink" to="/login">
              <Button id="getStarted" variant='light' onChange={() => {}}>
                Get Started &#8594;
              </Button>
            </Link>
          </div>
        </div>
        <div className="child">
          <div id="imageContainer" className='right'>
            <img id="homeImage" src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home