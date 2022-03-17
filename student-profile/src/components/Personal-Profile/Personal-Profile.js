import React from 'react';

import { BrowserRouter, HashRouter, Link, Routes, Route } from 'react-router-dom';

import './Personal-Profile.css';

import test1 from '../../assets/mediator.png';
import test2 from '../../assets/vak-2.png';
import test3 from '../../assets/verbaliser.png';

export default function PersonalProfile() {
    return (
        <>
        <BrowserRouter>
        <div className="content-div">
            <h1>Personal Profile</h1>
            <p><i><a href ="https://vimeo.com/1295245" target="_blank">where I tell you everything inside my mind, based on unproven scientific testing</a></i></p>

            <br />
            <p>#content</p>
            <br></br>
            <hr></hr>
            <h2>The Tests</h2>
            <div className="test-container">
                <div className="test-large">
                    <div id="test1" className="test-text-wrapper">
                        <h3>Test 1: Myer-Briggs-style Personality Test</h3>
                        <p><Link to="https://www.16personalities.com/" target="_blank"><i>Source : www.16personalities.com </i></Link></p>
                        <br></br>
                        <h4>Results</h4>
                        <h5>INFP - The Mediator</h5>
                        <p>The meediator personality type has a lot going for it- however due to wanting truth etc etc etc you know the drill</p>
                        <br />
                    </div>
                </div>
                <div className="test-small">
                    <p>Insert image here</p>
                    <img className="test-pic" src={test1} alt="INFP"></img>
                </div>
            </div>
            <div className="test-container">
                <div className="test-small">
                    <p>Insert image here</p>
                    <img className="test-pic" src={test2} alt="INFP"></img>
                </div>
                <div className="test-large">
                    <div id="test2" className="test-text-wrapper">
                        <h3>Test 2: Learning Styles Test</h3>
                        <p><a href="https://personalitymax.com/learning-styles-test/" target="_blank"><i>Source : www.personalitymax.com</i></a></p>
                        <br></br>
                        <h4>Results</h4>
                        <p><a href="https://www.youtube.com/watch?v=kRMqCukTyPw">Visual - 38%</a></p>
                        <p><i>I shot half of the above clip- breaking the fourth wall</i></p>
                        <p>Kinetic - 33%</p>
                        <p>Aural - 29%</p>

                        <p>ANALYSIS</p>
                        <br />
                    </div>
                </div>
            </div>
            <div className="test-container">
                <div className="test-large">
                    <div id="test3" className="test-text-wrapper">
                        <h3>Test 3: Verbal Reasoning Test </h3>
                        <p><a href="https://www.psychometricinstitute.com.au/free_psychometric_test.html" target="_blank"><i>Source : www.psychometricinstitute.com.au/free_psychometric_test.html </i></a></p>
                        <p><a href="https://www.psychometricinstitute.com.au/test-area-instructions.asp?testid=16" target="_blank"><i>*Actual test link*</i></a></p>
                        <br></br>
                        <h4>Results</h4>
                        <p>100%</p>

                        <br />
                    </div>
                </div>
                <div className="test-small">
                    <p>Insert image here</p>
                    <img className="test-pic" src={test3} alt="INFP"></img>
                </div>
            </div>

            <h2>Context around these results</h2>
            <br></br>
            <p>What does it all mean??</p>
            {/*
            In addition to the results themselves, you should answer each of the questions below with one paragraph.
• What do the results of these tests mean for you?
• How do you think these results may influence your behaviour in a team?
• How should you take this into account when forming a team?
                I think that the comment section here is a personal reflection kind of thing - taking note that most of these tests are arbitrary and not
                scientific.....
                I think that its all
            */}
            <br />

        </div>
        </BrowserRouter>
        </>
    );
}