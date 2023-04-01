import React from 'react'
import { useState } from 'react'

function User() {
    const [logout, setLogout] = useState(null)

    const handleClick =()=>{
        setLogout(!logout)
    }
  return (
    <div className='user'>
          <button onClick={handleClick}>
        { logout ? 'Logout': 'Login'}
    </button>
    </div>
  )
}

export default User