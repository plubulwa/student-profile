import React from 'react';
import {HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from '../Home/Home';
import IdealJob from '../Ideal-Job/Ideal-Job';
import PersonalInformation from '../Personal-Information/Personal-Information';
import InterestInIt from '../Interest-In-It/Interest-In-It';
import PersonalProfile from '../Personal-Profile/Personal-Profile';
import ProjectIdea from '../Project-Idea/Project-Idea';


import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <HashRouter>
      <header>
        <div className="title">
          <div className="title-text">
            <h1>PETER LUBULWA</h1>
          </div>
          <Navigation />
        </div>
      </header>
      
        <main>
          
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/ideal-job" element={<IdealJob />} />
              <Route path="/personal-information" element={<PersonalInformation />} />
              <Route path="/interest-in-it" element={<InterestInIt />} />
              <Route path="/personal-profile" element={<PersonalProfile />} />
              <Route path="/project-idea" element={<ProjectIdea />} />
            </Routes>
          </div>
          
        </main>
       


      </HashRouter>
      
    </div>
  );
}

export default App;
