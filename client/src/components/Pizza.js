    import React,{useState} from 'react';
    import { Row,Col,Card,Button,Modal } from "react-bootstrap";
    import { useDispatch, useSelector } from "react-redux";
    import { addToCart } from "../actions/cartAction";
    

    const Pizza = ({pizza}) => {

        const[varient,setVarient] = useState('small');
        const[quantity,setQuantity] = useState(1);
        const [show, setShow] = useState(false);//moal state
        //
        const dispatch = useDispatch();
        
        //method pass to reucer with values
        const addToCartHandler = () => {
            dispatch(addToCart(pizza,quantity,varient));
        }

        /**modal functions***/
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Card style={{ width: '18rem', marginTop:'30px' }}>
                    <Card.Img variant="top" 
                              src={pizza.image} 
                              style={{ height: '250px',cursor:'pointer' }}
                              onClick={handleShow}/>
                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col md={6}>
                                            <>
                                            <h6>Variants</h6>
                                                <select value={varient} onChange={e=>setVarient(e.target.value)}>
                                                    {pizza.varients.map((varient) => (
                                                        <option key={varient}>{varient}</option>
                                                    ))}
                                                </select>
                                            </>
                                        </Col>
                                        <Col md={6}>
                                           <>
                                            <h6>Quantity</h6>
                                                <select  value={quantity} onChange={e=>setQuantity(e.target.value)}>
                                                    {[...Array(10).keys()].map((v,i)=>(
                                                        <option value={i+1} key={i}>{i+1}</option>
                                                    ))}//array create ki quantity k liyr pure javascript se
                                                </select>
                                           </>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            <Row>
                                <Col md={6}>Price : {pizza.prices[0][varient] * quantity} /-Rs </Col>
                                <Col md={6}><Button onClick={addToCartHandler} className="bg-warning text-white">Add To Cart</Button></Col>
                            </Row>
                        </Card.Body>
                </Card>
                {/* Modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                        <div>
                            <Card.Img variant="top" 
                              src={pizza.image} 
                              style={{ height: '250px',cursor:'pointer' }}
                              onClick={handleShow}/>
                        </div>
                        <div>
                            <h5>Description :</h5>
                            <h6>{pizza.description}</h6>
                        </div>                              
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    export default Pizza;
