import React from 'react';
import profilesquare from '../../assets/profile-square.png';

import './personal-information.css';


export default function PersonalInformation() {
    return (
        <div className="content-div">
            <h1> Personal Information</h1>
            <p><i>in which I tell you my middle name</i></p>
            <br />
            <p>#content</p>
            <h2>Front Matter</h2>
            <div className="front-matter-holder">
                <div className="name-holder">
                    <ul>
                        <li>Name : Peter Lubulwa</li>
                        <li>Student No: s3857381</li>
                        <li>Github Pages : plubulwa.github.io/profile</li>
                        <li>Github Repository( student) : github.com/plubulwa</li>
                    </ul>
                </div>
                <div className="picture-holder">
                    <img className="profile-pic" src={profilesquare} alt="Peter Lubulwa"></img>
                </div>

            </div>

            <h2> Brief bio</h2>
            <p>Melbourne born but grew up in Canberra, I am currently and IT student at RMIT. I am very keen
                on programming and software engineering. My family are from Uganda, I have previously been at
                university before (studying a diverse range of things from biomedical science to music), and in
                general I will be trying to learn about xyz.</p>
            <p>Languages- English only, however know a tiny bit of Japanese, a smaller amount of mandarin, an OK amount of French, and learning my own language(which is Luganda)
            </p>
            <br />
            <h4>Facts and oddities</h4>
            <p>I been a touring musician since around 2007 (aging myself) and have recorded a number of albums with
                several bands and featured on a number of records. Rather than link derectly them here there are several
                spots throughout the profile on which you can click at get "Pete Rolled". If the mood takes you.
            </p>
            {/*Include your name, student number, student email address, picture,
             and some basic background information
             nationality and culture, education to date, languages spoken etc). 
              Include at least one fact about yourself that others
             may find interesting, such as a hobby, a pet or your favourite sport or other 
             pastime*/}


            <br />

        </div>
    );
}