import React from 'react'
import Cards from '../components/Cards'
import img3 from '../img/img3.jpeg'
import { NavLink } from 'react-router-dom'
function Biking() {
  return (
    <div>
<Cards
cualification='4.8'
cuali='(2) USA'
description='Group Mountain Bikin'
status='From $50 / person'
img={img3}
nameimg='bike'/>
<NavLink to='/pay'>Pay</NavLink>
</div>
  )
}

export default Biking