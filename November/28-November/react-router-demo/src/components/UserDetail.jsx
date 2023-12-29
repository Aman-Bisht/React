import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
    const {userId} = useParams()
    // const params = useParams()
  return (
    <div>
        Detail of user {userId}
        {/* Detail of user {params.userId} */}
    </div>
  )
}

export default UserDetail