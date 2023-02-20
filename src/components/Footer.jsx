import React from 'react'
import { Link } from 'react-router-dom'
import "../components/styles/Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/" className='nav-link'>Home</Link> 
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </div>
      <div className="footer-socials">
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} /></a>
      </div>
      <p className="footer-text">
        &copy; 2023 sapsgd.com . All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
