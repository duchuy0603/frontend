import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
const pageSlide=createSlice({
    name:"pageSlide",
    initialState:{
        pagelist:{},
        loadingPage:false,
        error:""
    },
    reducers:{
        savePage:(state,action)=>{
state.pagelist=action.payload


        }
    },
    extraReducers:{}
})
const{reducer:pageReducer}=pageSlide;
export const {savePage}=pageSlide.actions;
export default pageReducer
