import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from './../../Component/ServiceCard/ServiceCard';
import homeBanner from '../../assets/homeBanner.jpg';
import './Home.css';

import { useHistory } from 'react-router';

import { Button } from 'react-bootstrap';
import PateintSays from '../../Component/PateintSays/PateintSays';
import ContactForm from '../../Component/ContactForm/ContactForm';
import WhyUs from './../../Component/WhyUs/WhyUs';


const Home = () => {

    // all services 
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    // get fisrt 6 items in services 
    const topServices = services.slice(0, 6);

    /* --------------------------------
         use history for routing
    -------------------------------- */
    const historyServices = useHistory();
    const handleClickServices = () => {
        historyServices.push('/services');
    }
    const historyAppointment = useHistory();
    const handleClickAppointment = () => {
        historyAppointment.push('/appointment');
    }
    
    return (
        <div className="home" >


            <div>
                <img src={homeBanner} className="img-fluid homeBanner" alt="" />
                <div className="header-bodyDesign">
                    <h6>Your Best Dental Experience Here</h6>
                    <h1 id="home-header1">Best Care For Your Good Health</h1>
                    <p id="home-header2" className="home-text my-3">The ourselves suffering the sincerity. Inhabit her manners adapted age certain.</p>

                    <Button onClick={handleClickServices} className="servicBtn-design me-3 ">View Services</Button>


                    <Button onClick={handleClickAppointment} className="appointmentBtn-design mt-1">Make an Appointment</Button>

                </div>
            </div>


            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 className=" text-center my-5">Top <span className="blue-color">Services</span></h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">

                        {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                        {
                            // console.log(courses);
                            topServices.map(service =>

                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                >
                                </ServiceCard>
                            )
                        }

                    </div>

                </div>
            </div>
            <div className="whyUs">
                <WhyUs></WhyUs>
            </div>
            <div>
                <PateintSays></PateintSays>
            </div>
            
            <div>
                <ContactForm></ContactForm>
            </div>



        </div>
    );
};

export default Home;