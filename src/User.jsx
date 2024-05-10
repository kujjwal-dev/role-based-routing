import React from 'react'

const User = ({Current_user}) => {
  return (
    Current_user === "admin" || Current_user === "registered" ?
    <div>User</div>
    : <div>You can not access this page</div>
  )
}

export default User