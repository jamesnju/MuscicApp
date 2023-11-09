import React from 'react'
import './feature.css'
import { useState } from 'react';
import {motion} from 'framer-motion';

import ReactVisibilitySensor from 'react-visibility-sensor';
const Feature = ({icon, title}) => {
  const  [elementIsVisible, setElementIsVisible] = useState(false);
  const variant={
    true: { 
      transform:"scale(1)"
    },
    false: {
      transform:"scale(0.5)"
    }
  }; 
  return (
    <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}
    minTopValue={300}>
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
    </ReactVisibilitySensor>
  )
}

export default Feature