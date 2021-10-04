import { configureStore } from "@reduxjs/toolkit";
import Userslide from "../slide/Userslide";

const store=configureStore({
    reducer:{
        user:Userslide,
     
      
    }
  
  
    })

export default store;