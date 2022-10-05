import { createSlice } from "@reduxjs/toolkit"; 

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: 'not-authenticated',//checking, not-authenticated, authenticated
        uId:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessages:null
    },

    reducers:{
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        chechingCredentials: (state) => {

        }
    }
}); 

export const { login,chechingCredentials,logout } = authSlice.actions;