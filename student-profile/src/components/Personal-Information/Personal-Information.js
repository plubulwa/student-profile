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

            <h2> </h2>




            {/*Include your name, student number, student email address, picture,
        and some basic background information
    nationality and culture, education to date, languages spoken etc). 
    Include at least one fact about yourself that others
    may find interesting, such as a hobby, a pet or your favourite sport or other 
    pastime*/}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Diam quis enim lobortis scelerisque fermentum. Ac turpis egestas
                sed tempus. Varius sit amet mattis vulputate enim nulla aliquet
                porttitor. Donec adipiscing tristique risus nec feugiat in fermentum.
                Sed risus ultricies tristique nulla aliquet enim tortor at auctor.
                Cursus in hac habitasse platea dictumst quisque sagittis purus sit.
                Quam vulputate dignissim suspendisse in est ante in nibh.
                Risus nullam eget felis eget. Eget dolor morbi non arcu risus quis
                varius. Placerat orci nulla pellentesque dignissim enim sit.</p>
            <br />
            <p>Turpis cursus in hac habitasse platea. Tellus integer feugiat
                scelerisque varius morbi enim nunc faucibus a. Tortor posuere
                ac ut consequat semper viverra nam libero justo. Viverra suspendisse
                potenti nullam ac. Ut enim blandit volutpat maecenas volutpat blandit
                aliquam. Mi ipsum faucibus vitae aliquet nec. Massa ultricies mi quis
                hendrerit dolor. Non odio euismod lacinia at. Fusce ut placerat orci
                nulla pellentesque dignissim enim. Enim blandit volutpat maecenas volutpat
                blandit aliquam etiam erat velit. Nullam vehicula ipsum a arcu cursus vitae
                congue mauris rhoncus. Sagittis purus sit amet volutpat consequat mauris nunc
                congue nisi. Integer feugiat scelerisque varius morbi enim.</p>
            <br />
            <p>Suscipit tellus mauris a diam maecenas sed enim ut sem. Id consectetur
                purus ut faucibus. Pellentesque nec nam aliquam sem et tortor consequat.
                Augue interdum velit euismod in pellentesque massa placerat duis
                ultricies. Aliquet bibendum enim facilisis gravida neque. Suspendisse
                in est ante in nibh mauris cursus. Morbi tincidunt augue interdum velit.
                Pretium aenean pharetra magna ac placerat vestibulum lectus. In hendrerit
                gravida rutrum quisque non tellus orci ac auctor. Amet massa vitae tortor
                condimentum lacinia quis vel. </p>
        </div>
    );
}