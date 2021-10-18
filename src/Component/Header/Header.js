import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  return (
    <div  style={{marginBottom:'100px'}}    >
     
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light shadow"
        bg="light"
        fixed="top"
        // sticky='top'
       
      >
        <Container 
>
          <Navbar.Brand>
            <h3 className="fs-4 fw-bold header-text text-uppercase">
              Dental Square
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/home"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Services
              </NavLink>
              
              <NavLink
                to="/doctors"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Doctor's
              </NavLink>

              <NavLink
                to="/appointment"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Appointment
              </NavLink>

              <NavLink
                to="/contact"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Contact
              </NavLink>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;