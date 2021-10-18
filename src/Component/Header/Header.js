import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const userName = loggedInUser?.email.split('@');


  return (
    <div style={{ marginBottom: '70px' }}    >

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
              <Link
                to="/home"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Services
              </Link>

              <Link
                to="/doctors"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Doctor's
              </Link>

              <Link
                to="/appointment"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Appointment
              </Link>

              <Link
                to="/contact"
                className="text-decoration-none fs-5 me-3 header-text fw-bold"
              >
                Contact
              </Link>

              {
                loggedInUser ?
                  <button
                    className="btn-brand-outline rounded-pill fs-25 me-3 header-text fw-bold"
                  >
                    {userName[0]}
                  </button>


                  :
                  <Link
                    to="/login"
                    className="text-decoration-none fs-5 me-3 header-text fw-bold"
                  >
                    Login
                  </Link>

              }
              {
                loggedInUser && <button onClick={loggedInUser}  className="btn-brand-outline rounded-pill fs-35 me-3 header-text fw-bold">Log Out</button> 
              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;