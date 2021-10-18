import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from './../../Component/ServiceCard/ServiceCard';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const topServices = services.slice(0, 6);
    return (
        <div >


            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 className=" text-center my-5">Top <span className="salmon-color">Services</span></h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-5 mx-auto">

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



        </div>
    );
};

export default Home;