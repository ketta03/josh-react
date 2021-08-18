import React from 'react';
import "./intro.scss";
import Button from '@material-ui/core/Button';
import image from '../../assets/tool.png';


export default function intro() {
    return (
        <div className="intro" id="intro">
        <div className="left">
<div className="image">
    <img src={image} alt="pens"/>
</div>
        </div>
        <div className="right">
        <div className="wrapper">
        <h2>
            Hello, Welcome To
        </h2>
        <h1>
            Blessed Infant  
        </h1> 
        <h1>
        Tutoring.
        </h1>

        </div>
        <a href="#contact">
        <Button variant="outlined" color="secondary">
  Contact Us 
</Button> 
        </a>
               </div>
        </div>
    )
}
