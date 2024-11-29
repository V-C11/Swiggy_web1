import { configureStore } from "@reduxjs/toolkit"
import  cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        // user : userReducer  /*if we have a another Reducer */
    }
});

export default appStore;
