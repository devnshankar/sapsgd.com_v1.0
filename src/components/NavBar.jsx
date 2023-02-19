import '../components/styles/NavBar.scss';

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import AdmissionPage from '../pages/AdmissionPage';
import AdministrationPage from '../pages/AdministrationPage';
import AcademicsPage from '../pages/AcademicsPage';
import AboutPage from '../pages/AboutPage';


function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-links'>
          <Link to="/" className='nav-link'>Home</Link> 
          <Link to="/gallery" className='nav-link'>Gallery</Link> 
          <Link to="/contact" className='nav-link'>Contact</Link> 
          <Link to="/admission" className='nav-link'>Admission</Link> 
          <Link to="/administration" className='nav-link'>Administration</Link> 
          <Link to="/academics" className='nav-link'>Academics</Link> 
          <Link to="/about" className='nav-link'>About</Link> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/admission" element={<AdmissionPage/>} />
        <Route path="/administration" element={<AdministrationPage/>} />
        <Route path="/academics" element={<AcademicsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default NavBar
