import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";
const tranSlide=createSlice({
    name:"tranSlide",
    initialState:{
        tranlist:[],
        loadingtran:false,
        error:''
    },
    reducers:{
En:(state,action)=>{
    changeLanguage("en")
    state.loadingtran=true
},
Vi:(state,action)=>{
    changeLanguage("vi")
    state.loadingtran=false
}

        
    },
    extraReducers:{

    }

})
const{reducer:tranReducer}=tranSlide;
export const {En,Vi}=tranSlide.actions;
export default tranReducer;