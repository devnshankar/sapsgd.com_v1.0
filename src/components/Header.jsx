import React from 'react'
import "../components/styles/Header.scss"
import logo from '../assets/logo/logo-maa-rmbg.png';

function Header() {
  return (
    <header>
      <header className="header">
      <div className="header__left">
        <h1>Shree Aurobindo Purnanga Siksha Gabeshana Dham</h1>
        <h2>Nilagir, Baleshwar</h2>
      </div>

      <div className="header__right">
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
    </header>
    </header>
  )
}

export default Header
