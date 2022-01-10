import axios from 'axios';
import swal from "sweetalert";

//sign-up function
export const registerUser = (user) => async(dispatch) => {

    dispatch({type:'USER_REGISTER_REQUEST'});//jaise hi action call hua phle rqst send hogi
    try {
        const response = await axios.post(`/api/users/register`,user);
        dispatch({type:'USER_REGISTER_SUCCESS'});
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAIL', payload:error});
    }
}

//login function
export const loginUser = (user) => async(dispatch) => {

    dispatch({type:'USER_LOGIN_REQUEST'});//jaise hi action call hua phle rqst send hogi
    try {
        const response = await axios.post(`/api/users/login`,user);
        dispatch({ type:'USER_LOGIN_SUCCESS', payload: response.data });
        localStorage.setItem('currentUser',JSON.stringify(response.data));//localstorage me data string me rkhna padata ahai
        window.location.href = "/";
    } catch (error) {
        dispatch({ type:'USER_LOGIN_FAIL', payload:error });
    }
}

//logout
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem('cartItems');
    window.location.href = "/login";
  };

/****User Section****/
export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    try {
      const response = await axios.get("/api/users/getallusers");
      // console.log(response.data);
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_USERS_FAIL", payload: err });
    }
  };
  
  export const deleteUser = (userid) => async (dispatch) => {
    try {
      await axios.post("/api/users/deleteuser", { userid });
      swal("User Deleted Succss!", "success");
      window.location.reload();
      // console.log(res);
    } catch (error) {
      swal("Errro While Deleteing User");
    }
  };
  