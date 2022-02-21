import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlide";
import tranReducer from "./Translate";
import pageReducer from "./Pagination";
import { IntlReducer as Intl } from 'react-redux-multilingual';

const store=configureStore({
    reducer:{
  authReducer:authReducer,
  tranReducer:tranReducer,
  pageReducer:pageReducer,
      Intl
    },
    preloadedState: { Intl: { locale: 'vi'}}
  
  
    })

export default store;