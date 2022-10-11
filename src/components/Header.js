import React from 'react'
const logoIcon = require('../images/troll-face.png')
const Header = () => {
  return (
    <header className="nav-container">
      <img src={logoIcon} className="nav--logo" alt="skull" />
      <h2 className="nav--logo-name">Meme Generator</h2>
      <h4 className="nav--project3">React-RandyPol</h4>
    </header>
  )
}

export default Header
