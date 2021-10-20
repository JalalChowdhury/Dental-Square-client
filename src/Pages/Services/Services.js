import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import ServiceCard from './../../Component/ServiceCard/ServiceCard';
import { Button } from 'react-bootstrap';
import servicesBanner from '../../assets/servicesBanner.jpg';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    const historyAppointment = useHistory();
    const handleClickAppointment = () => {
        historyAppointment.push('/appointment');
    }

    return (
        <div className="services">
            <div>
                <img src={servicesBanner} className='servicesBanner_img' alt="" />
                <div className="services-bannerTextDesign">
                    <h1 className="services-headerText">What We Do</h1>
                    <h1 className="text-center services-headerText2">Enjoy Specialized Care Through Precision, Artistry, and Experience</h1>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 className="text-center my-5">Our best <span className="blue-color">services</span></h2>
                    <div className="row row-cols-1 row-cols-lg-3 g-4 px-5 mx-auto">

                        {/* <div className="d-flex flex-wrap  justify-content-center align-items-center mx-2"> */}
                        {
                            // console.log(courses);
                            services.map(service =>

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
            <div className="text-center">
                <Button onClick={handleClickAppointment} className="appointmentBtn-design mt-1">Make an Appointment</Button>
            </div>




        </div>
    );
};

export default Services;