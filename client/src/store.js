import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer ,getAllUsersReducer } from "./reducers/userReducer";
import { placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer } from "./reducers/orderReducer";


const rootReducer = combineReducers({
  getAllPizzaReducer : getAllPizzaReducer,
  cartReducer : cartReducer,
  registerUserReducer : registerUserReducer,
  loginUserReducer : loginUserReducer,
  placeOrderReducer : placeOrderReducer,
  getUserOrdersReducer : getUserOrdersReducer,
  allUserOrdersReducer : allUserOrdersReducer,
  addPizzaReducer : addPizzaReducer,
  getPizzaByIdReducer : getPizzaByIdReducer,
  updatePizzaByIdReducer : updatePizzaByIdReducer,
  getAllUsersReducer : getAllUsersReducer,
})

//cart me data mila to convert kr do json me varna empty aaray return kr do
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

//agrr locastore me cuurentuser key mein data miltaa hai to data return kre varn aempty
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const initialState = {
  cartReducer : {
    cartItems : cartItems // yaha set kiya..loading time pe cartitems pe state me
  },
  loginUserReducer : {
    currentUser : currentUser
  },
};//iske baad initialstate banaya
const middleware = [thunk];//iske baad middlwware banayacartItems

//create store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) 
  );

export default store;


