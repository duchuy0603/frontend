import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const authSlide=createSlice({
    name:"authSlide",
    initialState:{
        authlist:[],
        loadingAuth:false,
        error:''
    },
    reducers:{
        savetoken:(state,action)=>{
localStorage.setItem("datauser",action.payload)
localStorage.setItem("name",action.payload.user.name)
localStorage.setItem("role",action.payload.user.role)
localStorage.setItem("token",action.payload.token)
localStorage.setItem("id", action.payload.user._id)
state.authlist=action.payload;

        }
    },
    extraReducers:{

    }

})
const{reducer:authReducer}=authSlide;
export const {savetoken}=authSlide.actions;
export default authReducer;