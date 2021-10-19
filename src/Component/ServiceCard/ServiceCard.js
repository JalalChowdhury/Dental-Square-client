import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'
import { Button } from 'react-bootstrap';

const ServiceCard = (props) => {

    const { id, title, image, charge, description } = props.service;

    const serviceDetailURL = `/service/${id}`;
    return (
        <div className=" card_container col my-2 d-flex flex-wrap justify-content-center align-items-center mb-4">
            <div className="card-design h-100">


                <img className="card_img img-fluid p-2" src={image} alt="" />

                <div className="card_body">
                    <h2 className="card_text">{title}</h2>

                    <h5 className="card_text card-text" >$ {charge}</h5>
                    <p className="card-text"><small>{description.split(' ').splice(0, 17).join(' ')} ...</small></p>
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