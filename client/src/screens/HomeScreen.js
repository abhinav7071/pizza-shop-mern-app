import React,{useEffect} from 'react';
import { Row,Col,Container } from "react-bootstrap";
import AllPizza from "../pizza-data";
import { useDispatch,useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";

const HomeScreen = () => {
    const dispatch = useDispatch();
    //desturcture
    const pizzastate = useSelector((state)=>state.getAllPizzaReducer);
    const { loading, error, pizzas } = pizzastate;
    //
    useEffect(() => {
        dispatch(getAllPizzas());
    },[dispatch])

    
    return (
        <>
            <Container>
                {loading ? (<h1><Loader /></h1>) 
                         : error ? (<Error>Error while fetching data  {error}</Error>) 
                         :(<Row>
                             <Filters />
                            { pizzas.map((pizza,key) =>(
                                <Col md={4} key={pizza.name}>
                                    <Pizza pizza={pizza} />
                                </Col>
                            ))
        
                            }
                        </Row>)
                }
                
            </Container>
        </>
    )
}

export default HomeScreen;
