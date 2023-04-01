import React from 'react'
import { NavLink } from 'react-router-dom'
import Cards from '../components/Cards'
import img1 from '../img/img1.png'
function Swim() {
  return (
    <div>
        <Cards  
    cualification='5.0'
    cuali='(6) USA'
    description='Life lessons with Katie Zafereos'
    status='From $136 / person'
    img={img1}
    nameimg='Katie'
    
    />
    <NavLink to='/pay'>Pay</NavLink>
    </div>
  )
}

export default Swim