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
            <p><i>Also, a short narrative</i></p>
            <br />

            <h2>Beginnings</h2>
            <br />
            <p> My early beginnings in IT actually begin with my interst in music, which predates everything. A pinaist since I could form sentences,
                muusic has been a constant, and so when it became time for a major, free form school project in which I had to spend considerable hours,
                music was the medium in which I decided to create this project. At them time we had an early 486/ Pentium computer, and one of the earliest MIDI capable soundcards. Now this
                sound card would glitch, have latency issues, and generally cause the computer to crash unless the computer was defragmented regularly, kept up to date,, and all sorts of early computing
                maintenance pitfalls which led me to learn basics about old style computer maintenance, dig into the SystemBIOS in order to fix common problems, all so that I could make
                barely passable music in the '90s and early 2000s'. (This is also the section in which I age myself haha)</p>
            <br></br>
            <p>Following these (extremely) early days, I kept interested on the side- a lot of friends studied IT/ design/ other tech/ etc whilst I frankly did other things with my life.
                In brief we can sum this up as :</p>
            <ul>
                <li>Studied some biological sciences, maths and music (all incomplete)</li>
                <li>Joined a couple of bands and had fun touring etc (currently on hiatus?? or a writing phase?? To be continued...)</li>
                <li>Worked in a lot of offices with terrible computer systems</li>
                <li>Learnt some of the basics of graphic and user design from friends who are working/ practitioners, who would gently suggest when my
                    designs were average or worse </li>
            </ul>
            <p>All this is the backdrop- as Shakespeare/ sci-fi writers have said - the past is prologue "</p>
            <h2>Pre- Study</h2>
            <p>All of this began with the need to create a website. I was looking at creating a site which had interactive code elements ( so it would play like a game if required),
                but then also have the ability to have some elements with variable/ random text whenever someone accessed the website. The website would also have custom designed
                graphics and a different, but usable interface.</p>
            <br />
            <p>All of this I realised was not dable with a WIX template, and difficult in my noob knowledge through a WordPress/ CMS style web architecture. So I started
                to learn how to code HTML/ CSS/ JS. As I got deeper into learning how to make the type of website I wanted I really got into the code. My previous studies
                meant the logic of code was understandable ( I'm a maths head) and thus we get to the study zone and what I am intersted in now.
            </p>
            <br />
            <p>I also did some online study, and learned a lot ( a lot!) of Java, so now Java i feel relatively confident in, however I have to do some flash python learning.</p>
            <h2>The current focus</h2>
            <p> I am interested in programming mainly- with a desire to build applications and web interface which have good to great functionality, are easy to use, and
                can provide something a little different in how one interacts with and interface, or thinks about how a web page, or and app, should function. I have spent a lot of
                time learning:</p>
            <ul>
                <li>Java</li>
                <li>Javascript ('vanilla')</li>
                <li>React (currently)</li>
            </ul>
            <p>I am currently in a steep learning curve with the Swift/ Objective-C iOS framework, and have yet to apply my old school Java knowledge
                to current Android design patterns. In time I guess.
            </p>
            <p>I would eventually like to be able to use my programming skills across a number of different creative industries as well, including visual and musical applications,
                however the first step is to get really good at programming patterns so I can tackle anything.
            </p>
            <p>Currently I am working on a small 'portfolio' style puzzle game website made up of modern classics (Sudoku and Wordle). Both are in the process of being coded in the React.JS
                framework</p>
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