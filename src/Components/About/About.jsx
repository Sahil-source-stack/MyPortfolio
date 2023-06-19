import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <div className='container-fluid my-5'>
    <div className='row'>
    <div className='col-md-8 mx-auto'>
    <p className='about-me'>
      I am an enthusiastic fresher & passionate about working for an organization with an objective that will grow my skills, also a certified programmer who can deliver clean & optimize code in different languages. I am soo much well organized in my work along with my abilities of quick learning, time management & leadership with a better understanding of web technology & also loves to make UI applications.
    </p>
    </div>
    </div>
    <hr className='hr'/>
    <div className='row mt-5'>
    <div className='col-md-10 mx-auto'>
    <div className='row gy-5'>
    <div className='col-md-4 col-10 mx-auto'>
    <p>
      <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#qualification' aria-expanded="false" aria-controls="collapseExample">
        Qualifications
      </button>
    </p>
    <div className="collapse" id='qualification'>
      <div className="card card-body">
        <ul>
        <li>B.TECH CSE - JC Bose University Of Science & Technology, YMCA.</li>
        <li>DIPLOMA CSE - Haryana State Board Of Technical Education.</li>
        <li>Schooling 10th - Delhi Public School, GBN Noida.</li>
        </ul>
      </div>
    </div>
    </div>
    <div className='col-md-4 col-10 mx-auto'>
      <p>
        <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#projects' aria-expanded="false" aria-controls="collapseExample">
          Projects
        </button>
      </p>
      <div className="collapse" id='projects'>
        <div className="card card-body">
          <ul>
          <li>Personal Portfolio from React.</li>
          <li>Music Player Application from JavaScript.</li>
          <li>Digital Stopwatch from JavaScript.</li>
          <li>Jokes Browser Extension from Json.</li>
          <li>Expense Tracker from React.</li>
          <li>Eazy Laptopz Ecommerce from React.</li>
          <li>Youtube Clone from React.</li>
          </ul>
        </div>
      </div>
    </div><div className='col-md-4 col-10 mx-auto'>
      <p>
        <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#skills' aria-expanded="false" aria-controls="collapseExample">
          Skills
        </button>
      </p>
      <div className="collapse" id='skills'>
        <div className="card card-body">
          <ul>
          <li>Languages - HTML, Css, JSX, C++, Python, JavaScript.</li>
          <li>Frameworks - Bootstrap, Jquery, React, Redux.</li>
          <li>API - Fetch, Axios, Context, Json.</li>
          <li>Databases - MySQL, SQlite.</li>
          <li>Repo Version SYS - Git, GitHub.</li>
          <li>OS - Linux, Windows.</li>
          <li>Tools - VS Code Editor, MS Office, Canva.</li>
          </ul>
        </div>
      </div>
    </div><div className='col-md-4 col-10 mx-auto'>
      <p>
        <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#awards' aria-expanded="false" aria-controls="collapseExample">
          Awards
        </button>
      </p>
      <div className="collapse" id='awards'>
        <div className="card card-body">
          <ul>
          <li>
          Coder - 4 star Python || 3 star C++ @HackerRank.
          </li>
          <li>
          Silver Medalist in Cloud MOOC NPTEL exam.
          </li>
          <li>
          Campus Ambassador for Luneblaze Corporation.
          </li>
          <li>
          School Captain || Student Council Head || MR Fresher Reward.
          </li>
          <li>
          Scholar Badge in Academics || Won Gaming Competition Rewards.
          </li>
          </ul>
        </div>
      </div>
    </div><div className='col-md-4 col-10 mx-auto'>
      <p>
        <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#certification' aria-expanded="false" aria-controls="collapseExample">
          Certifications
        </button>
      </p>
      <div className="collapse" id='certification'>
        <div className="card card-body">
          <ul>
          <li>
          C++ & Python from Udemy.
          </li>
          <li>
          Frontend Development from Great Learning.
          </li>
          <li>
          Machine Learning from Skill Safari.
          </li>
          <li>
          Cyber Security & Ethical Hacking from Skill Up.
          </li>
          <li>
          Javascript from LinkedIn Assessment.
          </li>
          <li>
          English Proficiency & Software Developer Trainee from Amcat Assessment.
          </li>
          </ul>
        </div>
      </div>
    </div><div className='col-md-4 col-10 mx-auto'>
      <p>
        <button className="btn btn-primary text-center" type="button" data-bs-toggle="collapse" data-bs-target='#hobbies' aria-expanded="false" aria-controls="collapseExample">
          Hobbies
        </button>
      </p>
      <div className="collapse" id='hobbies'>
        <div className="card card-body">
          <ul>
          <li>
          Love to travel a lot.
          </li>
          <li>
          Playing Chess.
          </li>
          <li>
          Playing Video Games.
          </li>
          <li>
          Driving.
          </li>
          <li>
          Watching movies.
          </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default About;