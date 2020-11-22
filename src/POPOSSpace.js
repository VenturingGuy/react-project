// src/POPOSSpace.js

import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, hours} = props
    return (
        <div className="POPOSSpace">
            <img src={`${process.env.PUBLIC_URL}images/${image}`} 
            width="300"
            height="300"
            alt="50 California St."
            />
            <h1>{name}</h1>
            <div>{address}</div>
            <div id="hours">{hours}</div>
        </div>
    )
}

export default POPOSSpace
