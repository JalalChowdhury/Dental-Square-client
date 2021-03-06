import { faFacebook,  faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee, faEnvelope, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className="footer-container mt-5 px-3">
                <div className="subscribe d-flex justify-content-center">
                    <div>
                        <h2 className="mt-4 mr-5 text-center">Dental Health Tips & Special Offers</h2>
                        <h3 className="mt-1 mr-5 text-center">Subscribe to Our Newsletter</h3>
                        <p className="text-center mr-2"><small>No spam message from us, only give you latest offer which is best for you and your business</small></p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text p-3" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control me-1" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                            <button className="add-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-4 d-flex justify-content-around">
                    <div className="col-md-2 ml-1">
                        <h3 className=""> Contact US</h3>
                        <p> <small> <i className="fas fa-map-marker"></i> 134/4 NY, Sylhet, Bangladesh </small> </p>
                        <p> <small> <i className="fas fa-envelope-square"></i> dental.square@gmail.com </small> </p>
                        <p> <small>  <i className="fas fa-phone-square-alt"></i> (+88) 01646- 705394 </small> </p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Our Services</h3>
                        <p> <small>DENTAL IMPLANTS</small> </p>
                        <p> <small>Periodontal Care</small> </p>
                        <p> <small>ORAL HEALTH CONSULTATION</small> </p>
                        <p> <small>Others</small> </p>


                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Recent Events</h3>
                        <p><small>Free Teeth Cheakup</small></p>
                        <p><small>"Clean Teeth" Campaign</small></p>
                        <p><small>"How To Overcome Dental Anxiety" Event in Dhaka</small></p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">FAQ</h3>
                        <p> <small>Nutrition Tips For Healthy Teeth</small> </p>
                        <p> <small>Advanced Tooth Prosthetics</small> </p>
                        <p> <small>Healthy Smiles, Inside & Out</small> </p>
                        <p> <small>Ageing With a Smile</small> </p>
                        
                    </div>

                </div>
                <div className="social-links text-center">
                    <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com" > <FontAwesomeIcon className='text-white social-icon' icon={faFacebook} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.twitter.com" > <FontAwesomeIcon className='text-white social-icon' icon={faTwitter} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.instragram.com" > <FontAwesomeIcon className='text-white social-icon' icon={faInstagram} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.youtube.com" > <FontAwesomeIcon className='text-white social-icon' icon={faYoutube} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.linkedin.com" > <FontAwesomeIcon className='text-white social-icon' icon={faLinkedin} /></a>
                </div>
                <p className="text-center text-white mt-2 ">Copyright ??  Dental Square. All rights reserved. </p>
            </section>
        </div>
    );
};

export default Footer;