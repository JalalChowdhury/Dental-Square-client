import React from 'react';

import teeth1 from '../../assets/teeth-1.png'
import teeth2 from '../../assets/teeth-2.png';
import teeth3 from '../../assets/teeth-3.png';
import certificate from '../../assets/certified.png';

import './WhyUs.css';

const WhyUs = () => {
    return (
        <div>



            <div className="row container mx-auto">
                <h6 className="text-center blue-color"> #Our Features</h6>
                <h1 className="text-center my-3">Our Clients are Our Priority, We Offer Quality <span className="blue-color">Dental Services</span> of <span className="blue-color">Specialists</span></h1>
                {/* <p className="text-center">You will find a wide variety of dental services at Lotus Family Dental for children, teens, and adults alike. 
                    For general dentistry, visit us for a checkup and teeth cleaning twice a year, 
                    using the latest professional tools that make your visits relaxing and comfortable. </p> */}
                <div className="col-md-3 d-flex justify-content-center align-items-center ">
                    <div>
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <img src={teeth1} className="mx-auto teeth-img" alt="" />
                        </div>
                        <div className="p-3">
                            <h3 className="text-center mb-4">Teeth Whitening</h3>
                            <p className="text-center">Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center py-3 ">
                        <img src={teeth2} className="img-fluid teeth-img" alt="" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-center mb-4">Cleaning of Teeth</h3>
                        <p className="text-center">Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries)</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center py-3 ">
                        <img src={teeth3} className="img-fluid teeth-img" alt="" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-center mb-4">Quality Brackets</h3>
                        <p className="text-center">
                            Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly.
                        </p>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center py-3">
                        <img src={certificate} className="img-fluid teeth-img" alt="" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-center mb-4">Certified Dentists</h3>
                        <p className="text-center">Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;