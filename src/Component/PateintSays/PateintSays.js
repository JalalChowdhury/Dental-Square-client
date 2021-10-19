import React from 'react';
import patient1 from './ImagesPateint/patient1.jpg';
import patient2 from './ImagesPateint/Patient2.jpg';
import patient3 from './ImagesPateint/patient3.jpg';
import './PateintSays.css';

const PateintSays = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
                <h1 className="patient-header"><span className="blue-color">Patient say</span> About us</h1>
                <div className="d-flex flex-wrap  justify-content-center align-items-center py-5">
                    <div className="patient-div d-flex justify-content-center align-items-center">
                        <img src={patient1} className="patient-img" alt="" />
                        <div>
                            
                            <p>" When I think of my time in the hospital, the one thing that comes to my mind, is how little things are taken care of. 
                                I’ve always been one who has appreciated the small things. "</p>
                            <h4>__Zarin Khanom</h4>
                        </div>
                    </div>
                    <div className="patient-div d-flex justify-content-center align-items-center">
                        <img src={patient2} className="patient-img" alt="" />
                        <div>
                            
                            <p>" I can’t help but wonder, if we, the public, appreciate the people who work in health service; or are health providers,
                                 the way that we should. "</p>
                            <h4>__Ashab Chowdhury</h4>
                        </div>
                    </div>
                    <div className="patient-div d-flex justify-content-center align-items-center">
                        <img src={patient3} className="patient-img" alt="" />
                        <div>
                            
                            <p>" So why do I feel so positive about HCHS? To begin with, I’m totally blind & have been that way since birth. This past weekend, 
                                I was hospitalized because of infection in both legs. "</p>
                            <h4>__Harbia Pedri</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PateintSays;