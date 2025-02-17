import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    isLoggedIn: false,
    token: null,
    userId: null,
    isLoading: false,
    data: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: any, action: PayloadAction<{ token: string; userId: string; }>) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        },
        clearLogin(state) {
            state.isLoggedIn = false;
            state.token = null;
            state.userId = null;
            state.data = [];
        },

    }
})

export const { login, clearLogin } = userSlice.actions;

export default userSlice.reducer;