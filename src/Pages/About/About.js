import React from 'react';
import FaqAbout from '../../Component/FaqAbout/FaqAbout';
import WhyUs from '../../Component/WhyUs/WhyUs';
import './About.css'

const About = () => {
    return (
        <div>
            <div>

                <FaqAbout></FaqAbout>
            </div>
            <div className="about-why py-5">
                <WhyUs></WhyUs>
            </div>
        </div>
    );
};

export default About;