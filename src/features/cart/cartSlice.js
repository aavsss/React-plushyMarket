import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	status: 'idle',
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		}	
	}
});

export const { increment, decrement } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;