import React from 'react';
import DoctorInfo from '../../Component/DoctorInfo/DoctorInfo';
import { useState, useEffect } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h6 style={{color:" #00bcd4", }} className="text-center">MEET THE TEAM</h6>
                    <h2 className="ms-5 mt-2 mb-5 text-center">Honorable<span className="blue-color"> Dentists</span></h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-5 mx-auto">
                        {
                            // console.log(courses);
                            doctors.map(doctor =>

                                <DoctorInfo
                                    key={doctor.id}
                                    doctor={doctor}
                                >
                                </DoctorInfo>
                            )
                        }

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Doctors;