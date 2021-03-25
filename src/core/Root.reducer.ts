import { combineReducers } from "@reduxjs/toolkit";

import { arrivalsSlice } from "./features/arrivals/slice/Arrivals.slice";

export const RootReducer = combineReducers({
    arrivals: arrivalsSlice.reducer
});
