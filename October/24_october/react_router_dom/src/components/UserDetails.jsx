import React from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
  const params = useParams()
  const id = params.userId
  // console.log(params);
  return (
    <div>
        <h1>User {id} Details </h1>
        
    </div>
  )
}

export default UserDetails