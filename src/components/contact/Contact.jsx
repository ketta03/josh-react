import React from 'react';
import "./contact.scss";
import image from '../../assets/feedback.svg';

export default function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
<img src={image} alt="contact"/>
            </div>
            <div className="right">
                
                <h2>
                    Contact Us.
                </h2>
                <form onSubmit={handleSubmit}>
                <input type="text" class="field" placeholder="Your Name"/>
				<input type="text" class="field" placeholder="Your Email"/>
				<input type="text" class="field" placeholder="Phone"/>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
                </form>
               
               

</div>
            
        </div>
    )
}
