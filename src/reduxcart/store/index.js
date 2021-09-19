import { configureStore } from "@reduxjs/toolkit";
import Cartslide from "../slide/Cartslide";

const store=configureStore({
    reducer:{
        cart:Cartslide,
     
      
    },
  
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;