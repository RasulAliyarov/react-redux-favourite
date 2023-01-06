import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice/dataSlice";
import { favouriteSlice } from "./favouriteSlice/favouriteSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        favourite: favouriteSlice.reducer,
    },
})