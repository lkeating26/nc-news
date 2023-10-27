import React from 'react'
import NavBar from './NavBar'
import { UserContext } from '../contexts/User'
import { useContext } from 'react'

export default function Header() {

  const { user } = useContext(UserContext)

  return (
        <header className='header'>
                <h1>Welcome to NC News</h1>
                <p>Username: {user.username}</p>
        </header>
  )
}
