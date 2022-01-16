import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/edit-profile">Edit Profile</Link>
    </header>
  )
}
