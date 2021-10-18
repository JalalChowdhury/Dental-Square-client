import React from 'react';
import './DoctorInfo.css';
import { Button } from 'react-bootstrap';
const DoctorInfo = (props) => {

    const {name, image , email ,designation} = props.doctor;

    return (
        <div className=" card_container col my-2 d-flex justify-content-center align-items-center">
            <div className="card-design">


                <img className="doctor-image img-fluid" src={image} alt="" />

                <div className="card-body">
                   
                    <h3>{name}</h3>
                    <h6>{designation}</h6>
                    <p>{email}</p>
                    <Button className="btn-design">Contact Now</Button>
                </div>


            </div>

        </div>
    );
};

export default DoctorInfo;