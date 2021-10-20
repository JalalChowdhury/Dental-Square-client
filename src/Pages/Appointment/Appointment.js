import React from 'react';
import './Appointment.css';

const Appointment = () => {
    function handleSubmit() {
        alert("Your Appointment are proccecing now.We will contact You");
    }
    return (
        <div className="w-50 mx-auto">
            <div>
                <h1 className="text-center my-1 my-4">Request an <span className="blue-color">Appointment</span></h1>
                <h5 className="text-center my-3">Fill out the form below and we will contact you during our working hours.</h5>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">First Name</label>
                        <input type="FName" className="form-control" id="inputFName4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Last Name</label>
                        <input type="LName" className="form-control" id="inputLName4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Phone Number</label>
                        <input type="FName" className="form-control" id="inputPhone4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="Email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Date</label>
                        <input className="form-control" type="date" id="date" name="birthday" />

                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">

                            <textarea className="form-control" rows="3" placeholder="Question/Comment"></textarea>
                        </div>
                    </div>

                    <div className="col-lg-9 me-21">
                        <select className="form-control form-control-lg">
                            <option>Request answer</option>
                            <option>Receive reply by Mail</option>
                            <option>Receive reply by Phone</option>
                        </select>
                    </div>

                    <div className="col-lg-3">
                        <button onClick={handleSubmit} type="submit" className="send-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;