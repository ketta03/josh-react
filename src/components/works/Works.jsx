import React from 'react';
import "./works.scss"
import image from '../../assets/about.svg';

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="left">
                <img src={image} alt="about"/>
            </div>
            <div className="right">
            <div className="wrapper">
        <h1>
            About Us.
        </h1>
    
        <p>
        We are a group of certified and experienced teachers in lower class learning
Teaching numeracy (mathematics) and grammar which includes reading , writing and spelling.
        </p> 
        
        </div>
            </div>
        </div>
    )
}
