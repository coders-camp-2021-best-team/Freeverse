import React from 'react'

import { Navigate } from 'react-router-dom'

const auth = false; //temporary

export const ProtectedRoute = ({children}) => {
  return  auth ? children : <Navigate to="/"/>;
}
