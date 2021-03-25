import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Station } from "core/api/models/Station";

import { initialState } from "./InitialState";

export const arrivalsSlice = createSlice({
    name: "arrivals",
    initialState,
    reducers: {
        fetchArrivals: (state) => {
            state.isLoading = true;
        },
        fetchArrivalsSuccess: (state, { payload }: PayloadAction<Array<Station>>) => {
            const arrivalsArray = payload.map((station) => station.arrivals);
            state.isLoading = false;
            state.data = arrivalsArray.flat();
        },
        fetchArrivalsFailure: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = payload;
        }
    }
});
