import React from 'react';
import home1 from '../img/home1.png'

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact me for any web development ideas you have.s</p>
                <button>Contact Me</button>
                <div className="image">
                    <img src={home1} alt="Guy with a camera"/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;