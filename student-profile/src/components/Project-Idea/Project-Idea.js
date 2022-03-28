import React from 'react';


export default function ProjectIdea() {
    return (
        <div className="content-div">
            <div className='content-text'>
                <h1>Project Idea</h1>
                <h2>Marco Polo - a Geolocation game application</h2>
                <br />
                
                <br />
                <hr />
                <h2>Overview</h2>
               
                <p>Marco Polo/ Geo Marco Polo/ Geo MP is a geolocation massively multi
                    player game which involves the playing of the standard kids game,
                    Marco Polo, but on a potentially global scale. As with the traditional game,
                    when you are 'Marco', you are 'it'. Your aim is to seek out other players (who are ‘Polo’)
                    so that you can tag them and so not be 'it'.</p>
                <p>The aim is not to simply make a game - it is to practice iOS and/ or Android app
                    development using React Native, Xamarin, or some other code once, deploy everywhere
                    native platform. This would possibly involve the use of Unity’s augmented reality software
                    development kit if the application develops into an augmented reality version.
                </p>
                <p>The application will utilise Common API’s - a mapping API (Google or Open Maps or similar),
                    user location (in- phone GPS), a database for user data (such as Mongo DB), as part of this
                    user interface. The application will allow for the creation of accounts, as well as for multiple
                    users to access the system. Marco Polo will also require instantaneous communication between users
                    located within a radius (Marco!! Polo!!), and the ability to update this data in real time.</p>

                <br />
                <h2>Motivation</h2>
               

                <p>The main motivation is to start to create apps in React Native/ Xamarin that utilise some of the common
                    API's that can be used for a mobile app system, and to try and get all of these systems to communicate
                    together in a seamless way. It allows for the use an application of native and cross platform mobile
                    application technologies,  and integrate them into a usable interface.</p>
                <p>This application is also related to the skills gaps that I have in my ideal job profile – by generating
                    a problem that actively seeks to use these technologies a clearer picture of the skills I need to develop
                    becomes clearer.</p>
                <p>Another motivation is the exploration of cloud account creation, with security wired in at the start
                    (maybe a module is simple a very secure cloud log in system which uses existing technologies but is
                    able to guarantee all the security required).</p>
                <p>Finally, to be able to have a minimum viable product/ prototype which is on the way to being a
                    professional application, and to start thinking of all the processes required in order to get a
                    project/ product to this stage.</p>
                <br />
                <h2>Description</h2>
             
                
                <br />
                <p>How the game will work is by presenting the user with a stylised map of their surroundings.
                    This will be done most likely with an overlay with a common mapping technology (Apple Maps for example).
                    This map will have a number of features:
                </p>
                <h3>Global features</h3>
                <ul>
                    <li>The main interface will consist of either a 2D map, or an augmented reality style 3D street
                        view environment, which will show players current location, and the location of other players
                        based up which mode the player is in (see player features)</li>
                    <li>Each player will be able to create an account, and will have the ability to add close
                        friends to their account should they want to utilise ‘Friend Mode’</li>
                    <li>The application never shares a dot style location for an individual user – rather
                        there is a ‘heat map’ over lay of the player’s locations.</li>
                </ul>


                <h3>Player Features</h3>
                <h4>Marco Features</h4>
                <ul>
                    <li>When a player is ‘it’, the aim is to ‘find’/ get close enough to another player to tag them
                        (thus moving their game mode into ‘Polo’ mode – see below
                    </li>
                    <li>At intervals they are able to ‘call out’ – “Marco!”. This will then deliver a location heatmap
                        of other players locations in their area/ map radius. This map will disappear after a timeout (3-5s)
                    </li>
                    <li>After this, the board is clear (like the blind fold in the normal game) – they will then just have a
                        map and will have to remember the location hotspots and try to find other players in the real world.
                    </li>
                    <li>Notification is sent when the have located a person – see below in Anonymous Mode and Friend Mode for distance parameters
                    </li>

                </ul>
                <br />
                <h4>Polo Features</h4>
                <ul>
                    <li>When a player is in ‘Polo’ mode, they are able to see  a heat map of locations of the last ‘Marco’
                        call-outs on request.
                    </li>
                    <li>This map also disappears after a time out (3-5s)
                    </li>
                    <li>Polo players are notified of a ‘Marco’ call, and there are options in terms of how their device
                        responds to the Polo Call. For example – at any point in the game you are able to switch-off Polo
                        notification – even if you have opted for automatic ‘Polo’ message sending – see below in safety
                        protocols
                    </li>
                </ul>
                <h4>Anonymous mode</h4>
                <ul>
                    <li>By default, all players will be activated in anonymous mode – this means that the closest a ‘Marco’
                        player can get to a ‘Polo’ player is set at 200m (yet to be determined).
                    </li>
                    <li>Also – when a player is tagged as it – there is a brief timeout for the new player status to be
                        visible (both Marco and Polo) so that once tagged, their location is not immediately available.
                    </li>
                </ul>
                <h4>Friend mode</h4>
                <ul>
                    <li>Friend mode is utilised by friends who may wish to play with closer proximity – this reduces the
                        distance before someone is tagged as IUT to 50m (again – still trying to work this out).
                    </li>
                    <li>This mode is strictly opt– in, with permission required for each access to a friend mode game.
                    </li>

                </ul>
                <br />
                <h3>Safety Protocols</h3>
                <ul>
                    <li>Mandatory opt-in – game start, Friend Mode, auto ‘Polo’ messages and other features are by
                        default mandatory opt in – even by opening the application you have to choose which level of
                        engagement you wish
                    </li>
                    <li>As stated in Global features – there is no sharing of individual location data – the application
                        will share a heat map only of users’ location.
                    </li>
                    <li>All user data will be stored in encrypted format so that data breaches do not result in the
                        sharing of user data.
                    </li>
                </ul>
                <br></br>
                <h2>Tools and Technologies</h2>
               
                <p>The tools and technologies required for this project I would list as follows:</p>
                <ul>
                    <li>A cross platform application SDK - React Native or Xamarin</li>
                    <li>For AR – Unity would be required with their AR
                    </li>
                    <li>A mapping API such as Google
                    </li>
                    <li>A database such as Mongo DB (cloud-based NoSQL database)
                    </li>
                    <li>A security provider (I have used BouncyCastle for Java previously) to encrypt the user information
                    </li>
                    <li>An application bucket (through AWS or other service) to host the program
                    </li>
                </ul>
                <br />
                <p>Languages:</p>
                <ul>
                    <li>JavaScript and/or TypeScript (React)
                    </li>
                    <li>Java /Kotlin for Android app development
                    </li>
                    <li>Objective C/ Swift for iOS application development
                    </li>
                    <li>C# for Unity application development
                    </li>

                </ul>
                <h2>Skills Required</h2>
                
                <br />
                <ul>
                    <li>UX/ User Design</li>
                    <li>Programming</li>
                    <li>Software Engineering</li>
                    <li>Cloud computing architecture knowledge</li>
                    <li>Database and data management knowledge</li>
                    <li>Privacy and security knowledge</li>
                    <li>Project Management</li>
                </ul>
                <h2>Outcome</h2>
         
                <br />
                <ul>
                    <li>Learn how to make a cross platform native application</li>
                    <li>Learn how to (possibly) launch it on the app store</li>
                    <li>Learn about app design with multiple API’s and integrate them into a visually suitable interface</li>
                    <li>Investigate the privacy and security needs of applications which have a potentially
                        large amount of users
                    </li>
                    <li>Develop project management/ teamwork skills in order to complete this process.
                    </li>

                </ul>

            </div>
        </div >
    );
}