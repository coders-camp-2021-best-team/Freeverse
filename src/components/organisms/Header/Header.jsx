import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to={`/site/profile/${props.id}`}>Profile</Link>
      <Link to="/site/chat">Chat</Link>
      <Link to="/site/edit-profile">Edit Profile</Link>
    </header>
  )
}
