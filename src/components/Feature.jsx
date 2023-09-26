import React from 'react'
import './feature.css'
const Feature = ({icon, title}) => {
  return (
    <div className='features'>
        <div className="icon">
            <img className='iconimg' src={require(`../img/${icon}.png`)} alt=''/>
        </div>
        <span className="title">{title}</span>
        <span className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Atque quibusdam repudiandae aliquam, quaerat, vitae pariatur similique vero culpa, sunt
            porro tempore ducimus officiis iste. Nemo voluptates
            dolorum laboriosam quas deserunt!
        </span>
        <span className="learnmore">
            Learn More
        </span>
    </div>
  )
}

export default Feature