import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './AuthSlice';

const initState = { value: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload;
        },
        decrease: (state, action) => {
            if (state.value > 0) {
                state.value -= action.payload;
            } else {
                return initState;
            }
        }
    },
    extraReducers: {
        [logOut]: (state, action) => {
            state.value = action.payload;
        }
    }
}) 


export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;