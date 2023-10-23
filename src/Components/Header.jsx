import React from 'react'
import NavBar from './NavBar'
import Login from './Login'

export default function Header() {
  return (
        <div className='header'>
            <div>
                <h1>NC News</h1> 
            </div>
            <div className='nav-btns'>
              <NavBar />
              <Login />
            </div>
        </div>
  )
}
