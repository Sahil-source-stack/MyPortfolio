import React from 'react';
import './Navbar.css';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid nav_bg'>
    <div className='row'>
    <div className='col-8-mx-auto'>
    <nav className="navbar navbar-expand-lg">
    <div className="container-lg">
    <Link className="navbar-brand" to=''><img className='logo' src={logo} alt={logo} /></Link>
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" exact to='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" exact to='/about'>About-Me</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" exact to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </div>
    </div>
    </div>

  );
}

export default Navbar;