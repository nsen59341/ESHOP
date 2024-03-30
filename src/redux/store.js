import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReduxSlice";

const store = configureStore({
   reducer: {
    cartStore: cartSlice.reducer
   }  
});

export default store;