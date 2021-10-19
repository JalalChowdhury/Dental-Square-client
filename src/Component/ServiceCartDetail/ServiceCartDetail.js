import React from 'react';
import { useParams } from 'react-router';
// import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import servicesData from '../../fakeData/servicesData.json'
import { Button } from 'react-bootstrap';

const ServiceCartDetail = () => {

    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === parseInt(serviceId));

    const {title,image , charge , duration,description} = service ;

    const historyAppointment = useHistory();
    const handleClickAppointment = () => {
        historyAppointment.push('/appointment');
    }
    const historyServices = useHistory();
    const handleClickServices = () => {
        historyServices.push('/services');
    }


    return (
        <div className= "d-flex flex-wrap justify-content-center align-items-center mx-5">
            <img src={image} className="img-fluid" alt="" />
            <div>
               <h3 className="blue-color">{title}</h3>
               <h5>$ {charge}</h5>
               <h5>Treetment Duration : {duration}</h5>
               <p>{description}</p>
               <Button onClick={handleClickServices} className="servicBtn-design me-3 ">View Services</Button>
               <Button onClick={handleClickAppointment} className="appointmentBtn-design mt-1">Make an Appointment</Button>
            </div>
        </div>
    );
};

export default ServiceCartDetail; 