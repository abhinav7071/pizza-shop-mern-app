import React from 'react';
import { Row,Col,Container,Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { FaMinusCircle , FaPlusCircle , FaTrash } from "react-icons/fa";
import { addToCart,deleteFromCart } from "../actions/cartAction";
import  Checkout  from "../components/Checkout";

 const CartScreen = () => {
     const cartState = useSelector((state) => state.cartReducer);
     const cartItems = cartState.cartItems;
     //console.log(cartItems);
     const dispatch = useDispatch();
     const subTotal = cartItems.reduce((x,item) => x + item.price,0);
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>My Cart</h1>
                        <Row>
                            {
                                cartItems.map((item) => (
                                    <>
                                        <Col md={7}>
                                            <h5>{item.name} [{item.varient}] </h5>
                                            <h6>{" "}Price :{item.quantity} X {item.prices[0][item.varient]} = {" "} {item.price} </h6>
                                            <h6>Quantity : <FaMinusCircle className="text-danger" 
                                                            onClick={() => dispatch(addToCart(item,item.quantity -1,item.varient))} style={{cursor:'pointer'}} /> 
                                                           {item.quantity} &nbsp; 
                                                           <FaPlusCircle className="text-success"
                                                            onClick={() => dispatch(addToCart(item,item.quantity +1,item.varient))}  style={{cursor:'pointer'}}/></h6>
                                        </Col>
                                        <Col md={5}>
                                            <img alt={item.name} src={item.image} style={{width:'80px',height:'80px'}} />
                                            <FaTrash className="text-danger" 
                                                     onClick={() => dispatch(deleteFromCart(item))} style={{cursor:'pointer',marginLeft:'10px'}} /> 
                                        </Col>
                                        <hr/>
                                    </>
                                ))
                            }
                        </Row>
                    </Col>

                    <Col md={4}>
                        <h1>Payments Info</h1>
                        <h4>Sub total : {subTotal}</h4>
                        <h4>Rs. <Checkout subTotal={subTotal}></Checkout></h4>
                        {/* <Button>Checkout</Button> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartScreen;
