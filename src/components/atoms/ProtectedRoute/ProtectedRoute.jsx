import React from 'react'

import { Navigate } from 'react-router-dom'

const auth = true; //temporary

export const ProtectedRoute = ({children}) => {
  return  auth ? children : <Navigate to="/"/>;
}
