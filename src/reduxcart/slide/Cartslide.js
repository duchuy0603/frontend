import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {add,get,list,total} from'cart-localstorage'
import CartApi from './../../api/Cart';

// export const fetchCart = createAsyncThunk("cartslide/fetchCart",
//     async () => {
//         try {
            
         
//      const {data}=  await CartApi.getAll();
//      return data
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );
const CartSlide = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        loading: true
    },
    reducers: {
        async addCart(state, action) {
        const item = action.payload
      
        add(item,1)
            
           total()
           console.log(total);
     
        list();
        console.log(list);
        get(1)
        console.log(get);
           
        }
    },
    // extraReducers: {
    //     [fetchCart.pending]: (state, action) => {
    //         state.loading = false;
    //     },
    //     [fetchCart.fulfilled]: (state, action) => {
    //         state.items=action.payload;
    //         state.loading = true
    //     }
        
    // }
    

})
export const { addCart } = CartSlide.actions
export default CartSlide.reducer;