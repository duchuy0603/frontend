import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlide";
const store=configureStore({
    reducer:{
  authReducer:authReducer
      
    }
  
  
    })

export default store;