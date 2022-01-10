export const getAllPizzaReducer = (state = { pizzas:[] }, action) => {
    switch(action.type){
        case 'GET_PIZZAS_REQUEST' :
            return {
                ...state,//yaha pe jo bhi pizza rqst ayi, jo bhi rqst aayi uski copy bana kk return kar di
                loading:true
            }
        case 'GET_PIZZAS_SUCCESS' :
            return {
                pizzas : action.payload,//agar rst succes ho jati h to, to pizzas ek onject bnya to payload se jo bhi value ayi useee pizzas me storee kara rehe hai
                loading:false
            }
        case 'GET_PIZZAS_FAIL' :
            return {
                error : action.payload,//agar rst fail ho jati h to, to error ek objct bnya to payload se jo error ka msg aya use error objct me store akraya
                loading:false
            }
        default : return state //default me state return krengee
        
    }
}

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PIZZAS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_PIZZAS_SUCCESS":
        return {
          success: true,
          loading: false,
        };
      case "ADD_PIZZAS_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getPizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_PIZZABYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_PIZZABYID_SUCCESS":
        return {
          pizza: action.payload,
          loading: false,
        };
      case "GET_PIZZABYID_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const updatePizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "UPDATE_PIZZABYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "UPDATE_PIZZABYID_SUCCESS":
        return {
          updatesuccess: true,
          updateloading: false,
        };
      case "UPDATE_PIZZABYID_FAIL":
        return {
          updateloading: false,
          updateerror: action.payload,
        };
      default:
        return state;
    }
  };
  