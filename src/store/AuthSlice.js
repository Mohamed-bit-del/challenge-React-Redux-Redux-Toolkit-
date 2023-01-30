import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice ({
    name: 'auth',
    initialState: { isLogIn: false },
    reducers: {
        logIn: (state) =>  {
            state.isLogIn = true;
        },
        logOut: (state) => {
            state.isLogIn = false;
        }
    }
});

export const { logIn, logOut} = AuthSlice.actions;
export default AuthSlice.reducer;