import React from 'react';
import logo1 from './logo2.jpg'
import { Link } from 'react-router-dom';
import './index.css'
const Main = () => {
  return (
    <>
    <div className="content">
      <img src={logo1} alt="" />
      <div className="con">
     <h1 className='slo'>Hi there </h1><br></br>
     <h2 className='slo2'>Here The Option</h2><br></br>
     <button type='submit' className='job'><Link to="/dd">Job Finder</Link></button>
     <button type='submit' className='hiring'><Link to="/home">Hiring</Link></button>
     </div>
     </div>
    </>
  );
};

export default Main;
