import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        currentUser: {
            name: '',
            lastName: '',
            phone: '',
            email: '',
            uid: ''
        },
        error: null 
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },

        updateUserInfo: (state, action) => {
            // TODO
        },

        logout: (state) => {
            state.currentUser = {name: '', phone: '' , email: ''};
        }
    }
})

export const { setCurrentUser, updateUserInfo , logout} = userSlice.actions

export default userSlice.reducer