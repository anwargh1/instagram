import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected= ({children}) => {
    const token = localStorage.getItem('token')
    if(token){
        return children
    }
  return <Navigate to={-1} />
}

export default Protected