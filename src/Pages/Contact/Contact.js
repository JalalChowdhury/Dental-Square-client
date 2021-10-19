import React from 'react';
import Iframe from '@trendmicro/react-iframe';
import contactImg from '../../assets/contact-banner.jpg';
import contactImg2 from '../../assets/contact-2.jpg';
import './Contact.css';
import ContactForm from '../../Component/ContactForm/ContactForm';

const Contact = () => {
    return (

        <div>
            {/* Contact banner  */}
            <img src={contactImg} className="contact-img" alt="" />
            <div className="contact-headerText">
                <h1 className="contact-header">Contact Us!</h1>
                <h6 className="header_text">Call 1-523-DENTIST to get the smile of your dreams!</h6>

            </div>

            {/* Contact Info  */}
            <div className="d-flex justify-content-center align-items-center">
                <div className="row my-5">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={contactImg2} className='img-fluid' alt="" />

                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <div className="icons-design">
                            <i class="fas fa-plus-square"></i>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h3>523-DENTIST</h3>
                                    <h5>Emergency care</h5>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  align-items-center">
                            <div className="icons-design">
                            <i class="fas fa-phone-square-alt"></i>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h3>CALL US TODAY</h3>
                                    <h5>555-DENTIST</h5>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  align-items-center">
                            <div className="icons-design">
                            <i class="fas fa-envelope-square"></i>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h3>SEND US AN EMAIL</h3>
                                    <h5>Dental.square@example.com</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            <ContactForm></ContactForm>

            {/* Contact Google map  */}
            <div id="map-design">
                <div class="container">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.232313030407!2d91.85235586977541!3d24.90452730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1626020059971!5m2!1sen!2sbd" width="100%" height={440} />
                </div>
            </div>


        </div>
    );
};

export default Contact;