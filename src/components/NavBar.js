import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../img/airbnb.png'
import Register from '../components/Register'
import User from '../components/Login'


export  default function NavBar() {
  return (
    <div>
        <nav>
            <img 
            src={img}
            className='nav--logo'
            alt='airbnb'/>
           <NavLink  className='home'to='/'>Home</NavLink>
           <Register className='register'/>
           <User className='user'/>
        </nav>
    </div>
  )
}
