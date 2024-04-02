import { createReducer, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        addProduct(state,action){
            const tontaiItemIndex = state.cartItem.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            if(tontaiItemIndex !== -1){
                state.cartItem[tontaiItemIndex].quantity++;
            } else {
                state.cartItem.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteProduct(state,action){
            const tontaiItemIndex = state.cartItem.findIndex(
                cartItem => cartItem.id === action.payload.id
            );

            if(tontaiItemIndex !== -1){
                state.cartItem[tontaiItemIndex].quantity--;
                if(state.cartItem[tontaiItemIndex].quantity === 0){
                    state.cartItem.splice(tontaiItemIndex,1);
                }
            }
        }
    }
})

//export các thành phần để sử dụng

export const {addProduct,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;