import { combineReducers } from "@reduxjs/toolkit";

import { arrivalsSlice } from "./features/sncf/slice/arrivals/Arrivals.slice";
import { networksSlice } from "./features/sncf/slice/networks/Networks.slice";

export const RootReducer = combineReducers({
    arrivals: arrivalsSlice.reducer,
    networks: networksSlice.reducer
});
