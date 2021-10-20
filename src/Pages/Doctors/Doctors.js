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
            {/* Dentist Info  */}
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h6  className="text-center blue-color my-5">Meet The Dentist</h6>
                    <h2 className="mt-2 mb-5 text-center">Specialist<span className="blue-color"> Dentists</span></h2>
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