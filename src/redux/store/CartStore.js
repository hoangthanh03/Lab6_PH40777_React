import { configureStore } from "@reduxjs/toolkit";
import CartReduxcer from "../reduxcer/CartReduxcer";

export default configureStore({
    reducer:{
        cartItem: CartReduxcer
    }
})