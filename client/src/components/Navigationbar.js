import React from 'react';
import { Nav,Navbar,Container,Image,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";

const Navigationbar = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    //console.log(userState);
    const  { currentUser }  = userState;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Image src="images/logo.png" alt="logo" style={{height:"80px"}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                currentUser ?
                                    (<> <LinkContainer to="/">
                                    <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                      <LinkContainer to="/orders">
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                      </LinkContainer>
                                      <NavDropdown.Item
                                        onClick={() => {
                                          dispatch(logoutUser());
                                        }}
                                      >
                                        Logout
                                      </NavDropdown.Item>
                                    </NavDropdown>
                                  </LinkContainer>
                                  <LinkContainer to="/cart">
                                    <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                                </LinkContainer></>)
                            :
                                    (<><LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/cart">
                                    <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                                </LinkContainer></>)
                                    
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar;
