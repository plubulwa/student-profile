import React from 'react';

import Peter from '../../assets/peter-lubulwa-black.mp4';



export default function Home() {
    return (

        <>
            <video width="100%" height="auto" src={Peter} type="video/mp4" autoPlay loop muted>
                <p>Your browser does not support the video tag.</p>
            </video>
        </>

    );

}