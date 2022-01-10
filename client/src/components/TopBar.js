import React from 'react';
import { Nav,Navbar,Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaBeer } from "react-icons/fa";

 const TopBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <h6 className="text-light">
                        <FaBeer className="text-warning" />&nbsp; &nbsp;
                        Free Home Delivery order Above 500/-
                    </h6>
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/policy">
                            <Nav.Link>Terms & Policies</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar;