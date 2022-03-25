import React from 'react';

import Peter from '../../assets/peter-fast.mp4';



export default function Home() {
    return (

        <>
            <video width="2048" height="1080" src={Peter} type="video/mp4" autoPlay loop muted>
                <p>Your browser does not support the video tag.</p>
            </video>
        </>

    );

}