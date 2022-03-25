import React from 'react';

import {Link} from 'react-router-dom';


import home from '../../assets/Icons/home-icon.png'; 
import idealjob from '../../assets/Icons/ideal-job.png';
import personalinformation from '../../assets/Icons/information-icon.png';
import interest from '../../assets/Icons/interest-icon.png';
import profile from '../../assets/Icons/personal-profile.png';
import project from '../../assets/Icons/project-icon.png';


export default function Buttons(){

    return(
        <>
        <div className="button-wrapper">
              <Link to="/" ><button><img src={home} className='button-icon' alt="Home"></img></button></Link>
              <Link to="/personal-information" ><button><img className='button-icon' src={personalinformation} alt="personal information"></img></button></Link>
              <Link to="/interest-in-it"><button><img className='button-icon' src={interest} alt="interest in it"></img></button></Link>
              <Link to="/ideal-job"><button><img className='button-icon' src={idealjob} alt="ideal job"></img></button></Link>
              <Link to="/personal-profile"><button><img className='button-icon' src={profile} alt="personal profile"></img></button></Link>
              <Link to="/project-idea"><button><img className='button-icon' src={project} alt="project-idea"></img></button></Link>
          </div>
        
        </>

    );

}