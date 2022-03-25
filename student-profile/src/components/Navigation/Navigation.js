import React from 'react';

import {Link} from 'react-router-dom';





export default function Navigation(){

    return(
        <>
        <div className="navigation-wrapper">
              <Link to="/" className="nav-link">HOME</Link>
              
              <Link to="/personal-information" className="nav-link">PERSONAL INFORMATION</Link>
              
              <Link to="/interest-in-it" className="nav-link">INTEREST IN IT</Link>
              
              <Link to="/ideal-job" className="nav-link">IDEAL JOB</Link>
             
              <Link to="/personal-profile" className="nav-link">PERSONAL PROFILE</Link>
              
              <Link to="/project-idea" className="nav-link">PROJECT IDEA</Link>
          </div>
        
        </>

    );

}