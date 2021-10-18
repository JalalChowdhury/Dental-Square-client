import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="w-50 mx-auto">
            <div>
                <h1 className="text-center my-1">Request an Appointment</h1>
                <h5 className="text-center my-3">Fill out the form below and we will contact you during our working hours.</h5>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="FName" class="form-control" id="inputFName4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Last Name</label>
                        <input type="LName" class="form-control" id="inputLName4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Phone Number</label>
                        <input type="FName" class="form-control" id="inputPhone4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="Email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Date</label>
                        <input class="form-control" type="date" id="date" name="birthday" />

                    </div>
                    <div class="col-6">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">

                            <textarea class="form-control" rows="3" placeholder="Question/Comment"></textarea>
                        </div>
                    </div>

                    <div class="col-lg-9 me-21">
                        <select class="form-control form-control-lg">
                            <option>Request answer</option>
                            <option>Receive reply by Mail</option>
                            <option>Receive reply by Phone</option>
                        </select>
                    </div>

                    <div class="col-lg-3">
                        <button type="submit" class="send-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;