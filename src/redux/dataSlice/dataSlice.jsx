import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: [],
    },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload
        },
        idData: (state, action) => {
            state.value = action.payload
        }
    },

})


export const { setData, idData } = dataSlice.actions
export const { reducers } = <counterSlice className="reducer"></counterSlice>