export const cartReducer = (state = {cartItems : []}, action) => {
    switch(action.type){
        case 'ADD_TO_CART' :
            const alreadyExists = state.cartItems.find(
                (item) => item._id === action.payload._id
              );
            if (alreadyExists) {
                return {
                  ...state,
                  cartItems: state.cartItems.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                  ),
                };
              } else {
                return {
                
                    ...state,//yaha pe jo bhi cart me multiple pizza ka order hoga,iske liye cartItesm array ki tarah initialize krenge..aur jitnaa bhi data hh uskii copy bana di
                    cartItems:[...state.cartItems,action.payload]//state me sara data copy krke rkh liya, aur use cartitems ki array me jitnaa bhi exisiting item h state me cartItems me vo dal diya means phle kaa sara dta aur ..jo naya data hh vo data action.payload k throgh
                }
            }
            //delete item in cart
            case "DELETE_FROM_CART":
              return {
                ...state,
                cartItems: state.cartItems.filter(
                  (item) => item._id !== action.payload._id
                ),
              };
        default : return state //default me state return krengee
        
    }
}
