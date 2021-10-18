import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from './../../Component/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
   
    return (
        <div >

            <h1 className="text-center">Enjoy Specialized Care Through Precision, Artistry, and Experience</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 className="text-center my-5">Our all <span className="salmon-color">services</span></h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-5 mx-auto">

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



        </div>
    );
};

export default Services;