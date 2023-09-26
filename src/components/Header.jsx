import React from 'react'
import CenterMenu from './CenterMenu'
import './header.css';
function Header() {
  return (
    <div className='header'>
        <img src={require('../img/MuzicLogo.png')} alt='music logo' className='logo'/>
        <CenterMenu/>
        <div className="buttons">
            <button className='btn'>sign up</button>
            <button className='btn'>Login</button>
        </div>
    </div>
  )
}

export default Header