import React from 'react';
import './Home.css';
import img from './img.jpg';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-End', 'Software', 'Developer'],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const ss = useRef(null);

  useEffect(() => {
    const typed = new Typed(ss.current, {
      strings: ['Sahil Singh'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
    <section className='section'>
    <div className='container-fluid mt-5'>
    <div className='row'>
    <div className='col-8-mx-auto'>
    <div className='row'>
    <div id='tagline' className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
    <h1 className='home-heading1'>Hello World !</h1>
    <h2 className='home-heading2'>My name is <span className='name' ref={ss}></span> <br /> & I&apos;m a <span className='typing' ref={el}></span></h2>
    <h3 className='home-heading3'>#computer_science_engineer <br/> #coder #gamer #author <br/> #campus_ambassador</h3>
    <div className='mt-3'>
    <Link to='/about'>
    <button type="button" className="btn btn-primary btn-sm">Read More</button>
    </Link>
    </div>
    </div>
    <div className='col-lg-4 order-1 order-lg-2 main-img'>
    <img className='image-fluid' src={img} alt={img} />
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  );
}

export default Home;