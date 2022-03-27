import React from 'react';



import './Personal-Profile.css';

import test1 from '../../assets/mediator.png';
import test2 from '../../assets/vak-2.png';
import test3 from '../../assets/verbaliser.png';

export default function PersonalProfile() {
    return (
        <>
            <div className="content-div">
                <div className='content-text'>
                    <h1>Personal Profile</h1>
                    <p><i>where I tell you everything inside my mind, based on unproven scientific testing</i></p>

                    <br />
                    <p>#content</p>
                    <br></br>
                    <hr></hr>
                    <h2>The Tests</h2>
                    <div className="test-container">
                        <div className="test-large">
                            <div id="test1" className="test-text-wrapper">
                                <h3>Test 1: Myer-Briggs-style Personality Test</h3>
                                <p><i>Source : www.16personalities.com </i></p>
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
                        
                        <div className="test-large">
                            <div id="test2" className="test-text-wrapper">
                                <h3>Test 2: Learning Styles Test</h3>
                                <p><i>Source : www.personalitymax.com</i></p>
                                <br></br>
                                <h4>Results</h4>
                                <p>Visual - 38%</p>
                                <p><i>I shot half of the above clip- breaking the fourth wall</i></p>
                                <p>Kinetic - 33%</p>
                                <p>Aural - 29%</p>

                                <p>ANALYSIS</p>
                                <br />
                            </div>
                            <div className="test-small">
                            <p>Insert image here</p>
                            <img className="test-pic" src={test2} alt="INFP"></img>
                        </div>
                        </div>
                    </div>
                    <div className="test-container">
                        <div className="test-large">
                            <div id="test3" className="test-text-wrapper">
                                <h3>Test 3: Verbal Reasoning Test </h3>
                                <p><i>Source : www.psychometricinstitute.com.au/free_psychometric_test.html </i></p>
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
                    <p>I find that some of the results matches my personality – and so those aspects I need to be
                        aware of as I am trying to form a group (company/ organisation) or indeed what my responses
                        will be when group pressures arise. The following could be gleaned from the results. Verbal results
                        and communication are natural to me, and the learning style of reading/ images, followed by actually
                        doing things, is probably better for me rather than talking about an issue. </p>
                    <p>The visual result on the test above also includes reading ( as well as diagrams) which is
                        true e in terms of how I feel about myself – the third test confirms this.</p>
                    <p>With the knowledge, accurate of not, that is presented from these results,
                        the following could influence my behaviour. </p>
                    <ol>
                        <li>Knowing that I prefer written information and or doing, I would prefer for
                            information to be shared in written documents (not necessarily slack messages)
                            rather than long conversations about stuff</li>
                        <li>Introversion/. Judgement might mean that I am predisposed to being quite in a
                            group, but not necessarily that I am a follower – In previous circumstances/ in
                            general I tend to listen, not comment a lot, try to find consensus, and then etc.</li>
                    </ol>
                    <p>One of the key factors in team building is not necessarily having certain personality
                        types/ or archetypes in order to fulfil a certain role. Each person has complimentary
                        attributes which, combined with the task at hand, can produce quality work. I think the
                        main thing is to have at least one person who can recognise when the project isn’t moving
                        and to be decisive in the questioning of the project to get it moving forward. </p>
                    <br />

                </div>
            </div>
        </>
    );
}