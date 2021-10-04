import { createSlice } from "@reduxjs/toolkit";

import UserApi from '../../api/UserApi';
const Userslide=createSlice({
    name:"user",
    initialState:{
        items:[]
    },
    reducers:{
         dangnhap(state,action){
               const data=action.payload;
                UserApi.signin(data)
          } , 
           dangnki(state,action){
            const data=action.payload;
             UserApi.signup(data)
       } , 
       async  Signout(state,action){
        
        await UserApi.signup()
   } , 
    }

})
export const {dangnhap,dangki}=Userslide.actions
export default Userslide.reducer