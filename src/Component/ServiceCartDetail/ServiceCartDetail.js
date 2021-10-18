import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import servicesData from '../../fakeData/servicesData.json'

const ServiceCartDetail = () => {

    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === parseInt(serviceId));

    const {title,image , charge , description} = service ;


    return (
        <div className= "d-flex flex-wrap justify-content-center align-items-center mx-5">
            <img src={image} className="img-fluid" alt="" />
            <div>
               <h3>{title}</h3>
               <h5>$ {charge}</h5>
               <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCartDetail; 