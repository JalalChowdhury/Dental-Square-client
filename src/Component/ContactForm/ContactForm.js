import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import email from "../../assets/contactForm.png";

const ContactForm = () => {
    return (
        <section className="mt-5 pt-2">
            <div className="my-5">
               
                <div className="text-center">
                    <small className="text-success fw-bold">Get in Touch</small>
                    <h1>
                        Have Some <span className="header-text">Question?</span>
                    </h1>
                </div>
            </div>
            <Container className="mt-4 d-md-flex justify-content-center align-items-center p-3 mb-md-5 mx-auto">
                <div className="pe-5">
                    <img src={email} alt="" />
                </div>
                <div className="ps-md-5 h-100 ps-3 m-2 m-md-0">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                <h5>Name</h5>
                            </Form.Label>
                            <Form.Control type="email" placeholder="full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>
                                <h5>Email Address</h5>
                            </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                <h5>let us know about your problem</h5>
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="btn btnColor border-0 shadow-sm">Submit</Button>
                    </Form>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;