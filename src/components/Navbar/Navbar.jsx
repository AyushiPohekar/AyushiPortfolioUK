import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid navbarContainer">
      <a className="navbar-brand" href="#home" >Ayushi Pohekar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        </ul>
        <div className="d-flex navbarrightContainer" role="search">
        <div className="nav-item NavbarItem">
          <a className="nav-link " aria-current="page" href="#about">About</a>
        </div>
        <div className="nav-item NavbarItem">
          <a className="nav-link " aria-current="page" href="#skills">Skills</a>
        </div>
        <div className="nav-item NavbarItem">
          <a className="nav-link " aria-current="page" href="#project">Projects</a>
        </div>
        <div className="nav-item NavbarItem">
          <a className="nav-link " aria-current="page" href="#contact">Contact</a>
        </div>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar