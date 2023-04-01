import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
    const [register, setRegister] = useState(null)

  const handleClick=()=>{
setRegister(!register)
  }
  return (
    <div className='register '>
    <button onClick={handleClick}>
     <NavLink to ={'Form'}>Register</NavLink>
      </button>
    </div>
  )
}

export default Register