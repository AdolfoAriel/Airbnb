import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../components/Cards'
import img2 from '../img/img2.jpeg'

function Wedding() {
  return (
    <div>
        <Cards
    cualification='5.0'
    cuali='(30) USA'
    description='Learn weddinf photography'
    status='from $125 /person'
    img={img2}
    nameimg='wedding'/>
    <NavLink to='/pay'>Pay</NavLink>
    </div>
  )
}

export default Wedding