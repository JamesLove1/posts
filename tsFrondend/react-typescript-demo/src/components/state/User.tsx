import React, { useState } from 'react'

type AuthUser = {
    name:string,
    email:string
}

export default function User() {
    
    const [ user, setUser] = useState<null| AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name:"James",
            email: "jimmeylove@gmail.com",
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User eamil is {user?.email} </div>
    </div>
  )
}
