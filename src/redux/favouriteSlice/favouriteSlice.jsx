import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        value: 0,
        favData: []

    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        favouriteData: (state, action) => {
            state.favData.push(action.payload)
        },
        deleteData: (state, action) => {
            state.value = 0
            state.favData = action.payload
        }
    },
})
export const { increment, favouriteData, deleteData } = favouriteSlice.actions

export const { reducers } = <counterSlice className="reducer"></counterSlice>