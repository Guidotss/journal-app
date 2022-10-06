import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //checking ,not-authenticated, authenticated
        uId: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessages: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'; //checking ,not-authenticated, authenticated
            state.uId = payload.uId;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessages = null;

        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated'; //checking ,not-authenticated, authenticated
            state.uId = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessages = payload.errMessage;

        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
