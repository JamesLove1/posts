import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function User() {

  const userContext = useContext(UserContext)

    const handleLogin = () => {
      if (userContext){
        userContext.setUser({
          name: "James",
          email: "jimmeylove@gmail.com"
        })
      }
    }
    const handleLogout = () => {
      if (userContext){
        userContext.setUser(null)
      }
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}
