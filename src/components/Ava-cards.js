import Cards from "./Cards";
import React from 'react'
import img from '../img/group.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.jpeg'
import img3 from '../img/img3.jpeg'
function Avacards() {
  return (
<div>

<div className='hero'>
        <img 
        src={img}
        alt='e'
        className='hero-img'/>
        <h1 className='hero--header'> Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led
            by<br></br> one-of-a-kind hosts-all without <br></br>leaving
            home.
        </p>
    </div>

    <div className="container-cards">

<Cards  
cualification='5.0'
cuali='(6) USA'
description='Life lessons with Katie Zafereos'
status='From $136 / person'
img={img1}
nameimg='Katie'
ip='swim'
/>
<Cards
cualification='5.0'
cuali='(30) USA'
description='Learn weddinf photography'
status='from $125 /person'
img={img2}
nameimg='wedding'
ip='wedding'
/>
<Cards
cualification='4.8'
cuali='(2) USA'
description='Group Mountain Bikin'
status='From $50 / person'
img={img3}
nameimg='bike'
ip='biking'
/>

    </div>

</div>
  )
}

export default Avacards