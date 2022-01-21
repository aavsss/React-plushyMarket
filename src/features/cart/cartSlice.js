import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInitialNumber, addItemToCart } from '../../api/CartApi';

const initialState = {
	value: 0,
	status: 'idle',
};

// Doing using axios only. Also, could be done using react query
export const fetchInitialCartNumber = createAsyncThunk(
	'cart/fetchInitialCount',
	async() => {
		return fetchInitialNumber();
	}
);

export const addItemNumToCart = createAsyncThunk(
	'cart/addItemToCart',
	async({id, quantity}) => {
		return addItemToCart(id, quantity);
	}
)

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		setEmpty: (state) => {
			state.value = 0
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialCartNumber.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchInitialCartNumber.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value = action.payload;
			});
		
		builder
			.addCase(addItemNumToCart.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(addItemNumToCart.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value = action.payload;
			});
	},
});

export const { increment, decrement, setEmpty } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;