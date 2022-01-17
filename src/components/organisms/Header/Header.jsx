import React from 'react'
import { Link } from 'react-router-dom'
import { someID } from '../../../App'

export const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to={`/site/profile/${someID}`}>Profile</Link>
      <Link to="/site/chat">Chat</Link>
      <Link to="/site/edit-profile">Edit Profile</Link>
    </header>
  )
}
