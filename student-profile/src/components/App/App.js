import React from 'react';
import { BrowserRouter, HashRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';


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
            <h1>Student Profile - Peter Lubulwa</h1>
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
        </main>
        <footer className="footer">
          <div className="button-wrapper">
            <nav className="three-grid">

              <Link to="/" ><button>Home</button></Link>
              <Link to="/personal-information" ><button>Personal Information</button></Link>
              <Link to="/interest-in-it"><button>Interest in IT</button></Link>
              <Link to="/ideal-job"><button>Ideal Job</button></Link>
              <Link to="/personal-profile"><button>Personal Profile</button></Link>
              <Link to="/project-idea"><button>Project Idea</button></Link>

            </nav>
          </div>
        </footer>


      </HashRouter>
    </div>
  );
}

export default App;
