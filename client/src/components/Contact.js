import React from 'react'
import { Container, Row, Col,Table,Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

 const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
            <Row>
                <Col md={6}>
                    <h1>Tech Info Pizza Shop</h1>
                        <p>Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum </p>
                            <Table striped bordered hover className="text-center">
                                <thead>
                                    <tr>
                                        <th className="bg-warning text-center" colSpan={3}>---Contact Details---</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><FiPhoneCall /></td>
                                        <td>Phone</td>
                                        <td>0123-456789</td>
                                    </tr>
                                    <tr>
                                        <td><ImMobile /></td>
                                        <td>Mobile</td>
                                        <td>0123-456789</td>
                                    </tr>
                                    <tr>
                                        <td><AiOutlineMail /></td>
                                        <td>Email</td>
                                        <td>help@domain.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Col>
                    <Col md={6}>
                        <Image src="images/farmhouse.jpg" style={{height:'100%',width:'100%'}} />
                    </Col>
            </Row>
                
            </Container>
        </>
    )
}

export default Contact;
