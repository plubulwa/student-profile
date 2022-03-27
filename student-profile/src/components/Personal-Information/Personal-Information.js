import React from 'react';
import profilesquare from '../../assets/profile-square.png';

import './personal-information.css';


export default function PersonalInformation() {
    return (
        <div className="content-div">
            <div className='content-text'>
                <h1> Personal Information</h1>
                <p><i>in which I tell you my middle name</i></p>
                <br />
                <p>#content</p>

                <div className="front-matter-holder">
                <div className="picture-holder">
                        <img className="profile-pic" src={profilesquare} alt="Peter Lubulwa"></img>
                    </div>

                    <div className="name-holder">
                        <h2>Front Matter</h2>
                        <ul>
                            <li>Name : Peter Lubulwa</li>
                            <li>Student No: s3857381</li>
                            <li>Github Pages : plubulwa.github.io/profile</li>
                            <li>Github Repository( student) : github.com/plubulwa</li>
                        </ul>
                        <h2> Brief bio</h2>
                        <p>Melbourne born but Canberra raised, I am currently an IT student at RMIT. 
                            I am very keen on programming and software engineering. My family are from 
                            Uganda, I have previously been at university before (studying a diverse 
                            range of things from biomedical science to music), and in general one 
                            could say this is a new adventure in technology.
                        </p>
                        <br></br>
                        <p>I am a native English speaker, however have learnt a tiny bit of Japanese, 
                            a smaller amount of Mandarin, an OK amount of French, and I am current 
                            learning my own language (which is Luganda - my parents only spoke 
                            English at home when I was growing up – so it’s taken a while).
                        </p>
                        <br />
                        <h4>Facts and oddities</h4>
                        <ol>
                            <li>I been a touring musician since around 2007 (aging myself) and have recorded a number of albums with 
                                several bands and featured on a number of records – I would link to them here but there is a data mining 
                                company of high renown that has a lot of information regarding this. </li>
                            <li>I am a really bad gamer – like really bad. Although as an adult I have only had 
                                Apple computers until I got a PC this year, and don’t have a TV/ console, so the gap is kind of my 
                                fault. Daggy puzzle games, however, are my jam …. (see later in regard to personal projects I am 
                                working on…)</li>
                        </ol>
                        
                    </div>
                   

                </div>
            </div>
        </div>
    );
}