import React from 'react'
import '../index.css'
import { AiTwotoneStar } from "react-icons/ai";
import {  NavLink } from 'react-router-dom';
function Cards({cualification,cuali, description, status, img, nameimg,ip }) {
  return (
    <div > 
<img 
src={img}
alt={nameimg} 
className='card-img'
/>
<h1>
 <i className='icon'><AiTwotoneStar/></i> 
   <strong>{cualification}</strong> {cuali}
</h1>
<p>{description}</p>
<h2>{status} <NavLink  to = {ip}>rent</NavLink></h2>
    </div>
  )
}

export default Cards