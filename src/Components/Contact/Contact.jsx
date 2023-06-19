import React from 'react';
import { Link } from 'react-router-dom';
import {FaEnvelope, FaGithub, FaLinkedin, FaMobileAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <div className='container-lg-fluid my-5'>
    <div className='row'>
    <div className='col-8 mx-auto'>
    <Link
    style={{textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}} className='connection-list'>
    <div className="alert alert-success text-center" role="alert">
    <FaMobileAlt/> +91 7042218329</div></Link>
    <Link
    style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }} className='connection-list'>
    <div className="alert alert-warning text-center" role="alert">
    <FaEnvelope/> sahil18329@gmail.com</div></Link>
    <Link
    style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }} className='connection-list' exact to='https://www.linkedin.com/in/sahil-singh-917012228/'>
    <div className="alert alert-info text-center" role="alert">
    <FaLinkedin/> LinkedIn - connect to me here.</div></Link>
    <Link
    style={{ textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }} className='connection-list' exact to='https://github.com/Sahil-source-stack'>
    <div className="alert alert-dark text-center" role="alert">
    <FaGithub/> GitHub - check out my project samples here.</div></Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Contact;