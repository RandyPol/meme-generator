import React from 'react'
const logoIcon = require('../images/TrollFace.png')
const Header = () => {
  return (
    <header className="nav-container">
      <img src={logoIcon} className="nav--logo" alt="skull" />
      <p className="nav--logo-name">Meme Generator</p>
      <p className="nav--project3">React Course - Project 3</p>
    </header>
  )
}

export default Header
