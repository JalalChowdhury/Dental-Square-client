import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'
import { Button } from 'react-bootstrap';

const ServiceCard = (props) => {

    const {id,title, image , charge } = props.service;

    const serviceDetailURL = `/service/${id}`;
    return (
        <div className=" card_container col my-2 d-flex justify-content-center align-items-center">
            <div className="card-design">


                    <img className="card_img img-fluid" src={image} alt="" />

                <div className="card_body">
                    <h2 className="card_text">{title}</h2>

                    <h5 className="card_text" >$ {charge}</h5>
                    {/* <p>{description}</p> */}
                    
                    <Link to={serviceDetailURL}>
                        <Button className="btn-design">Details</Button>
                    </Link>



                </div>


            </div>

        </div>
    );
};

export default ServiceCard;