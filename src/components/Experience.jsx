import React from 'react'
import './expericence.css'
import Feature from './Feature'

export const Experience = () => {
  return (
    <div className='experience'>
        <img src={require('../img/Path 318.png')} alt="" className='eximg'/>

        {/* heading */}

        <div className="headline">
          <span>This an amazing app worth Trying</span>
          <span>
            <strong>Muscic experience</strong>
          </span>
        </div>
        {/* feature section */}
        <div className="feature">
          <Feature icon='Group 2' title="For live music"/>
          <Feature icon='music icon' title="For daily music"/>
          <Feature icon='Group 4' title="For Artists"/>

        </div>
    </div>
  )
}
