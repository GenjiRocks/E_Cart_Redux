import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        initialState:[]
    },
    reducers:{
        // add to wishlist function
        addToWishlist: (state, actions) => {
            state.push(actions.payload)
        },

        // remove from wishlist function
        removeFromWishlist: () => {}
    }
        
})

export const{addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer