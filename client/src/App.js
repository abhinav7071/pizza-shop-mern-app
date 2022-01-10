import './App.css';
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Navigationbar from "./components/Navigationbar";
import { Switch,Route } from "react-router-dom";


function App() {
  return (
    <>
        <TopBar />
        <Navigationbar />
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/policy" component={Policy}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/orders" component={OrderScreen}></Route>
          <Route path="/admin" component={AdminScreen}></Route>
        </Switch> 
    </>
  );
}

export default App;
