import React from 'react';
import {HashRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';


import home from '../../assets/Icons/home-icon.png'; 
import idealjob from '../../assets/Icons/ideal-job.png';
import personalinformation from '../../assets/Icons/information-icon.png';
import interest from '../../assets/Icons/interest-icon.png';
import profile from '../../assets/Icons/personal-profile.png';
import project from '../../assets/Icons/project-icon.png';

import IdealJob from '../Ideal-Job/Ideal-Job';
import PersonalInformation from '../Personal-Information/Personal-Information';
import InterestInIt from '../Interest-In-It/Interest-In-It';
import PersonalProfile from '../Personal-Profile/Personal-Profile';
import ProjectIdea from '../Project-Idea/Project-Idea';


function App() {
  return (
    <div className="app">
      <header>
        <div className="title">
          <div className="title-text">
            <h1>PETER LUBULWA</h1>
          </div>
        </div>
      </header>
      <HashRouter>
        <main>
          
          <div className="content">
            <Routes>
              <Route path="/" />
              <Route path="/ideal-job" element={<IdealJob />} />
              <Route path="/personal-information" element={<PersonalInformation />} />
              <Route path="/interest-in-it" element={<InterestInIt />} />
              <Route path="/personal-profile" element={<PersonalProfile />} />
              <Route path="/project-idea" element={<ProjectIdea />} />
            </Routes>
          </div>
          <div className="button-wrapper">
              <Link to="/" ><button><img src={home} className='button-icon' alt="Home"></img></button></Link>
              <Link to="/personal-information" ><button><img className='button-icon' src={personalinformation} alt="personal information"></img></button></Link>
              <Link to="/interest-in-it"><button><img className='button-icon' src={interest} alt="interest in it"></img></button></Link>
              <Link to="/ideal-job"><button><img className='button-icon' src={idealjob} alt="ideal job"></img></button></Link>
              <Link to="/personal-profile"><button><img className='button-icon' src={profile} alt="personal profile"></img></button></Link>
              <Link to="/project-idea"><button><img className='button-icon' src={project} alt="project-idea"></img></button></Link>
          </div>
        </main>
       


      </HashRouter>
      <footer >
          <div className='footer'></div>
          </footer>
    </div>
  );
}

export default App;
